import popupTrigger from "./_popupTrigger";
import textDeliver from "./_textDeliver";

const Section = class {
    observer = new MutationObserver((mutationList, observer) => {
        const [mutationRecord] = mutationList;
        popupTrigger(mutationRecord.target);
        textDeliver();
    });

    constructor(section) {
        const target = [...section.querySelectorAll("tbody, .hstack")];
        target.forEach((el) => {
            this.observer.observe(el, {
                childList: true,
            });
        });
    }
};

const sectionObserver = () => {
    [...document.querySelectorAll("main > *:not(.contents), .contents > *")].forEach((section) => new Section(section));
};

export default sectionObserver;
