import popupTrigger from "./_popupTrigger";
import textDeliver from "./_textDeliver";
import { tooltipEnabler } from "./_tooltip";

const Section = class {
    observer = new MutationObserver((mutationList, observer) => {
        const [mutationRecord] = mutationList;
        popupTrigger(mutationRecord.target);
        textDeliver();
        tooltipEnabler(mutationRecord.target);
    });

    constructor(section) {
        const target = [
            ...section.querySelectorAll("tbody, .hstack, .btn-group"),
        ];
        target.forEach((el) => {
            this.observer.observe(el, {
                childList: true,
            });
        });
    }
};

const sectionObserver = () => {
    const doms = [
        ...document.querySelectorAll("main > *:not(.contents), .contents > *"),
    ];
    doms.forEach((section) => new Section(section));
};

export default sectionObserver;
