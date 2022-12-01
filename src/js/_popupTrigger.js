import css from "bundle-text:/src/assets/popup.css";

export const pop = async (that) => {
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
    const isOpened =
        that.hasAttribute("data-pop-distinct") && window.__lastPopup;
    const popup = isOpened
        ? window.__lastPopup
        : window.open(
              "about:blank",
              "_blank",
              `toolbar=no,status=no,menubar=no,width=${popupWidth},height=${popupHeight},left=${popupX},top=${popupY}`
          );
    popup.document.write(style.outerHTML);
    popup.document.write(div.outerHTML);
    popup.location.href = that.href || that.value;
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
    const target = el || document;
    const elements = target.querySelectorAll(".popup-link");

    [...elements].forEach((x) => eventBinder(x));
};

export default popupTrigger;
