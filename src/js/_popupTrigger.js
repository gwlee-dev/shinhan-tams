const popupTrigger = () => {
    const popupWidth = 1200;
    const popupHeight = 900;
    const pop = (that) => {
        const curX = window.screenLeft;
        const curY = window.screenTop;
        const curWidth = document.body.clientWidth;
        const curHeight = document.body.clientHeight;

        const popupX = curX + curWidth / 2 - popupWidth / 2;
        const popupY = curY + curHeight / 2 - popupHeight / 2;

        const opt = `width=100, height=100, left=${popupX}, top=${popupY}, scrollbars=0, toolbar=0, menubar=no`;
        window.open(that.getAttribute("href"), "_blank", opt);
    };

    const preventAndPop = (e) => {
        e.preventDefault();
        pop(e.target);
    };

    [...document.querySelectorAll(".popup-link")].forEach((x) =>
        x.addEventListener("click", preventAndPop)
    );

    [...document.querySelectorAll(".table tbody")].forEach((x) => {
        const observer = new MutationObserver((mutations) => {
            [...mutations[0].addedNodes].forEach((tr) =>
                [...tr.querySelectorAll(".popup-link")].forEach((el) =>
                    el.addEventListener("click", preventAndPop)
                )
            );
        });
        observer.observe(x, { childList: true });
    });

    [...document.body.classList].includes("popup-window") &&
        [...document.querySelectorAll(".popup-close")].forEach((x) =>
            x.addEventListener("click", () => {
                window.close();
            })
        );
};

export default popupTrigger;
