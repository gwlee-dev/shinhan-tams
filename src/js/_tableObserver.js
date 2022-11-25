import popupTrigger from "./_popupTrigger";
import textDeliver from "./_textDeliver";

const Table = class {
    observer = new MutationObserver((mutationList, observer) => {
        const [mutationRecord] = mutationList;
        [...mutationRecord.target.querySelectorAll("tbody tr")].forEach((tr) =>
            popupTrigger(tr)
        );
        textDeliver();
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
