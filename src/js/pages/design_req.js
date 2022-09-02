const designReq = () => {
    const caseIds = [...document.querySelectorAll(".case-id")];
    const caseSearch = document.querySelector("#case-search");
    caseIds.forEach((x) =>
        x.addEventListener("click", () => {
            caseSearch.focus();
            caseSearch.value = x.innerHTML;
        })
    );
};

designReq();
