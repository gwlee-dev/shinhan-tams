import css from "bundle-text:/src/assets/popup.css";

const pop = async (that) => {
    const style = document.createElement("style");
    style.textContent = css;
    const div = document.createElement("div");
    const spinner = document.createElement("div");
    spinner.className = "spinner-border";
    div.append(spinner);
    const popupWidth = 780;
    const popupHeight = 500;
    const { screenLeft, screenTop, outerWidth, outerHeight } = window;
    const popupX = screenLeft + outerWidth / 2 - popupWidth / 2;
    const popupY = screenTop + outerHeight / 2 - popupHeight / 2;
    const popup = window.open(
        "about:blank",
        "_blank",
        `toolbar=no,status=no,menubar=no,width=${popupWidth},height=${popupHeight},left=${popupX},top=${popupY}`
    );
    popup.document.write(style.outerHTML);
    popup.document.write(div.outerHTML);
    popup.location.href = that.href;
};

const preventAndPop = (e) => {
    e.preventDefault();
    pop(e.currentTarget);
};

const eventBinder = (x) => {
    x.setAttribute("target", "_blank");
    x.addEventListener("click", preventAndPop);
};

const popupTrigger = (el) => {
    const target = el || document;
    [...target.querySelectorAll(".popup-link")].forEach((x) => eventBinder(x));
};

export default popupTrigger;
