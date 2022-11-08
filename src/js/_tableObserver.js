import popupTrigger from "./_popupTrigger";

const Table = class {
    observer = new MutationObserver((mutationList, observer) => {
        const [mutationRecord] = mutationList;
        [...mutationRecord.addedNodes].forEach(
            (tr) => console.log(tr) && popupTrigger(tr)
        );
    });

    observe = (el) =>
        this.observer.observe(el, {
            childList: true,
        });

    constructor(table) {
        const tbody = table.querySelector("tbody");
        this.observe(tbody);
    }
};

const tableObserver = () => {
    [...document.querySelectorAll("table.table")].forEach(
        (table) => new Table(table)
    );
};

export default tableObserver;
