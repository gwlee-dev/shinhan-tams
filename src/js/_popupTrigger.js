const popupTrigger = () => {
    const pop = (that) => {
        window.open(
            "about:blank",
            "_blank",
            "width=100,height=100"
        ).location.href = that.getAttribute("href");
    };

    const preventAndPop = (e) => {
        e.preventDefault();
        pop(e.target);
    };

    [...document.querySelectorAll(".popup-link")].forEach((x) => {
        x.setAttribute("target", "_blank");
        x.addEventListener("click", preventAndPop);
    });

    [...document.body.classList].includes("popup-window") &&
        [...document.querySelectorAll(".popup-close")].forEach((x) =>
            x.addEventListener("click", () => {
                window.close();
            })
        );
};
export default popupTrigger;
