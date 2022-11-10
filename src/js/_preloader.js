const fillLoader = (value) => {
    const loader = document.querySelector(".preloader .bar");
    loader.style.width = value;
};

const preloader = () => {
    document.addEventListener("DOMContentLoaded", () => {
        fillLoader("50%");
    });

    document.addEventListener("readystatechange", () => {
        document.readyState === "interactive" && fillLoader("25%");
        if (document.readyState === "complete") {
            fillLoader("100%");
            setTimeout(() => {
                document
                    .querySelector(".preloader")
                    .classList.remove("loading");
            }, 400);
        }
    });
};

export default preloader;
