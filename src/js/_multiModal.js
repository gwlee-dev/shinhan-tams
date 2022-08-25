import { Modal } from "bootstrap";

[...document.querySelectorAll("[data-gr-toggle=modal]")].forEach((x) => {
    x.addEventListener("click", () => {
        const target = document.querySelector(x.getAttribute("data-gr-target"));
        if (typeof target !== "undefined") {
            const instance = new Modal(target);
            instance.show();
        }
    });
});
