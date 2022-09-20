const popupController = () => {
    console.log("pop!");
    const popup = document.querySelector(".popup");
    const {
        screen: { availHeight },
        outerHeight,
        innerHeight,
    } = window;
    const { offsetWidth, offsetHeight } = popup;
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
        popupModal,
    } = window.opener.window;

    const popupX = screenLeft + parentWidth / 2 - popupWidth / 2;
    const popupY = screenTop + parentHeight / 2 - popupHeight / 2;

    window.resizeTo(popupWidth, popupHeight);
    window.moveTo(popupX, popupY);

    window.addEventListener("unload", (e) => {
        if (window.performance.navigation.type) {
            popupModal.hide();
        }
    });

    const closeButtons = popup.querySelectorAll(".popup-close-btn");
    [...closeButtons].forEach((el) =>
        el.addEventListener("click", () => window.close())
    );
};

popupController();
