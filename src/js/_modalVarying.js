const modalVarying = [...document.querySelectorAll(".modal-varying")];
modalVarying.forEach((x) => {
    x.addEventListener("show.bs.modal", (event) => {
        const button = event.relatedTarget;
        if (typeof button !== "undefined") {
            const recipient = button.getAttribute("data-gr-varying");
            const modalTitle = x.querySelector(".modal-title");
            modalTitle.textContent = recipient;
            const recipientClass = button.getAttribute("data-gr-varying-class");
            console.log(recipientClass);
            if (typeof recipientClass !== "undefined") {
                [...x.classList]
                    .filter((className) => className.startsWith("varying-"))
                    .forEach((className) => x.classList.remove(className));
                x.classList.add(`varying-${recipientClass}`);
            }
        }
    });
});
