import { Modal } from "bootstrap";

const multiModal = () => {
    [...document.querySelectorAll("[data-gr-toggle=modal]")].forEach((x) => {
        x.addEventListener("click", () => {
            const target = document.querySelector(
                x.getAttribute("data-gr-target")
            );
            if (typeof target !== "undefined") {
                const instance = new Modal(target);
                instance.show(x);
            }
        });
    });
};

export default multiModal;
