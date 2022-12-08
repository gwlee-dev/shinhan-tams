import css from "bundle-text:/src/assets/popup.css";

export const pop = async (arg) => {
    const style = document.createElement("style");
    style.textContent = css;
    const div = document.createElement("div");
    const spinner = document.createElement("div");
    spinner.className = "spinner-border";
    div.append(spinner);
    const popupWidth = 780;
    const popupHeight = 500;
    const { screenLeft, screenTop, outerWidth, outerHeight } = window;
    const popupX = screenLeft + (outerWidth - popupWidth) / 2;
    const popupY = screenTop + (outerHeight - popupHeight) / 2;
    const isString = arg.constructor.name === "String";
    const isOpened =
        !isString &&
        arg.hasAttribute("data-pop-distinct") &&
        window.__lastPopup;
    const popup = isOpened
        ? window.__lastPopup
        : window.open(
              "about:blank",
              "_blank",
              `toolbar=no,status=no,menubar=no,width=${popupWidth},height=${popupHeight},left=${popupX},top=${popupY}`
          );
    popup.document.write(style.outerHTML);
    popup.document.write(div.outerHTML);
    popup.location.href = isString ? arg : arg.href || arg.value;
    popup.focus();
    window.__lastPopup = popup;
};

const preventAndPop = (e) => {
    e.preventDefault();
    ![...e.target.classList].includes("disabled") && pop(e.currentTarget);
};

const eventBinder = (x) => {
    x.setAttribute("target", "_blank");
    x.removeEventListener("click", preventAndPop);
    x.addEventListener("click", preventAndPop);
};

export const popupTrigger = (el) => {
    if (el && [...el.classList].includes("popup-link")) {
        eventBinder(el);
    } else {
        const target = el || document;
        const elements = target.querySelectorAll(".popup-link");
        elements?.id === "devView" &&
            console.log("trigger: popup-link 검색됨", elements);

        [...elements].forEach((x) => eventBinder(x) && console.log(x));
    }
};

export default popupTrigger;
