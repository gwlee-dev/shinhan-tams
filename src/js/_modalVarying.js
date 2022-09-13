export const varyingFunc = (func) => {
    const modalVarying = [...document.querySelectorAll(".modal-varying")];
    modalVarying.forEach((x) => {
        x.addEventListener("show.bs.modal", (event) => {
            const button = event.relatedTarget;
            if (typeof button !== "undefined") {
                func(x, button);
            }
        });
    });
};

const defaultVaryingFunc = (modal, button) => {
    const recipient = button.getAttribute("data-gr-varying");
    const modalTitle = modal.querySelector(".modal-title");
    modalTitle.textContent = recipient;
};

varyingFunc(defaultVaryingFunc);
