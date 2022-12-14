const Popup = class {
    position = () => {
        const {
            screen: { availHeight },
            outerHeight,
            innerHeight,
        } = window;
        const { offsetWidth, offsetHeight } = this.root;
        const ui = {
            width: outerWidth - innerWidth,
            height: outerHeight - innerHeight,
        };
        const popupWidth = offsetWidth + ui.width;
        const calcHeight = offsetHeight + ui.height;
        const popupHeight =
            calcHeight > availHeight * 0.75
                ? availHeight * 0.75
                : offsetHeight + ui.height;

        const {
            screenLeft,
            screenTop,
            outerWidth: parentWidth,
            outerHeight: parentHeight,
        } = window.opener.window;

        const popupX = screenLeft + (parentWidth - popupWidth) / 2;
        const popupY = screenTop + (parentHeight - popupHeight) / 2;

        window.resizeTo(popupWidth, popupHeight);
        window.moveTo(popupX, popupY);

        window.addEventListener("resize", this.root.classList.add("resized"), {
            once: true,
        });
    };

    constructor(root) {
        this.root = root;

        const closeButtons = this.root.querySelectorAll(".popup-close-btn");
        [...closeButtons].forEach((el) =>
            el.addEventListener("click", () => window.close())
        );
        [...document.querySelectorAll(".popup-close")].forEach((x) =>
            x.addEventListener("click", () => window.close())
        );

        window.addEventListener("load", this.position);
        window.addEventListener(
            "unload",
            () => (window.opener.__lastPopup = null)
        );
    }
};

const popupController = () => {
    if (window.opener) {
        const el = document.querySelector(".popup");
        if (el) Object.assign(el, new Popup(el));
        else if (![...document.body.classList].includes("popup")) {
            document.querySelector("header").remove();
            document.querySelector("footer").remove();
        }
    }
};

export default popupController;
