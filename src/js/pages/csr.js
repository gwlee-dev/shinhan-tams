import DynamicTable from "../dynamicTable";
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

const init = () => {
    const el = document.querySelector("#test-history");
    el.instance = new DynamicTable({
        root: el,
        counter: document.querySelector("#history-count"),
        locked: document.querySelector("#history-remove-btn"),
    });
};

designReq();
init();
