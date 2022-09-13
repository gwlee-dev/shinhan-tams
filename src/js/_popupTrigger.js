(() => {
    [...document.querySelectorAll("a[onclick]")].forEach((x) =>
        x.addEventListener("click", (e) => e.preventDefault())
    );
    const popupWidth = 1200;
    const popupHeight = 900;
    window.pop = (that) => {
        const curX = window.screenLeft;
        const curY = window.screenTop;
        const curWidth = document.body.clientWidth;
        const curHeight = document.body.clientHeight;

        const popupX = curX + curWidth / 2 - popupWidth / 2;
        const popupY = curY + curHeight / 2 - popupHeight / 2;

        const opt = `width=100, height=100, left=${popupX}, top=${popupY}, scrollbars=0, toolbar=0, menubar=no`;
        const popup = window.open(that.href, "_blank", opt);
        popup.focus();
    };
})();
