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
        const popupHeight =
            offsetHeight > availHeight
                ? availHeight * 0.75
                : offsetHeight + ui.height;

        const {
            screenLeft,
            screenTop,
            outerWidth: parentWidth,
            outerHeight: parentHeight,
        } = window.opener.window;

        const popupX = screenLeft + parentWidth / 2 - popupWidth / 2;
        const popupY = screenTop + parentHeight / 2 - popupHeight / 2;

        window.resizeTo(popupWidth, popupHeight);
        window.moveTo(popupX, popupY);
    };

    constructor(root) {
        this.root = root;

        const closeButtons = this.root.querySelectorAll(".popup-close-btn");
        [...closeButtons].forEach((el) =>
            el.addEventListener("click", () => window.close())
        );

        this.position();
    }
};

const init = () => {
    const el = document.querySelector(".popup");
    el.instance = new Popup(el);
};

init();
