const fillLoader = (value) => {
    const loader = document.querySelector(".preloader .bar");
    loader.style.width = value;
};

export const preloader = () => {
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

const Overlay = {
    amount: 0,
    show: () => document.querySelector(".postloader").classList.add("loading"),
    hide: () =>
        document.querySelector(".postloader").classList.remove("loading"),

    get counter() {
        return this.amount;
    },

    set counter(value) {
        value > 0 ? this.show() : this.hide();
        this.amount = value <= 0 ? 0 : value;
    },
};

export const Loading = {
    start: () => (Overlay.counter = Overlay.counter + 1),
    done: () => (Overlay.counter = Overlay.counter - 1),
};
