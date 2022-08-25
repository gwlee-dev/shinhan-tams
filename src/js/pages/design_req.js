const designReq = () => {
    const caseIds = [...document.querySelectorAll(".case-id")];
    const caseSearch = document.querySelector("#case-search");
    caseIds.forEach((x) =>
        x.addEventListener("click", () => {
            caseSearch.value = x.innerHTML;
        })
    );

    const caseConnect = document.querySelector("#case-connect");
    caseConnect.addEventListener("show.bs.modal", (event) => {
        const button = event.relatedTarget;
        const recipient = button.getAttribute("data-bs-varying");
        const modalTitle = caseConnect.querySelector(".modal-title");
        modalTitle.textContent = `${recipient} 연결`;
    });
};

designReq();
