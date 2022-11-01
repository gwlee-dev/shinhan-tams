const popupTrigger = () => {
    const style = document.createElement("style");
    style.innerHTML = `
        *, :before, :after {
            box-sizing: border-box;
        }
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            line-height: 1;
            height: 100%;
            margin: 0;
        }
        @keyframes spinner-border { to { transform: rotate(360deg); }}
        .spinner-border {
            height: 1.5rem;
            width: 1.5rem;
            vertical-align: -0.125em;
            border-width: 0.25em;
            border-style: solid;
            border-color: rgb(108, 117, 125) transparent rgb(108, 117, 125) rgb(108, 117, 125);
            border-image: initial;
            border-radius: 50%;
            animation: 0.75s linear 0s infinite normal none running spinner-border;
        }
    `;
    const div = document.createElement("div");
    const spinner = document.createElement("div");
    spinner.className = "spinner-border";
    div.append(spinner);
    const pop = async (that) => {
        const href = that.href;
        console.log(that);
        const popupWidth = 780;
        const popupHeight = 500;
        const { screenLeft, screenTop, outerWidth, outerHeight } = window;
        const popupX = screenLeft + outerWidth / 2 - popupWidth / 2;
        const popupY = screenTop + outerHeight / 2 - popupHeight / 2;
        const popup = window.open(
            "about:blank",
            "_blank",
            `width=${popupWidth},height=${popupHeight},left=${popupX},top=${popupY}`
        );
        popup.document.write(style.outerHTML);
        popup.document.write(div.outerHTML);
        popup.location.href = href;
    };

    const preventAndPop = (e) => {
        e.preventDefault();
        pop(e.currentTarget);
    };

    [...document.querySelectorAll(".popup-link")].forEach((x) => {
        x.setAttribute("target", "_blank");
        x.addEventListener("click", preventAndPop);
    });
};
export default popupTrigger;
