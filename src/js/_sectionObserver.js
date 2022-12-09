import popupTrigger from "./_popupTrigger";
import textDeliver from "./_textDeliver";

const Section = class {
    init = (target) => {
        const targets = [...target.querySelectorAll("tbody, .hstack")];

        targets.forEach((el) => {
            this.observer.observe(el, {
                childList: true,
                characterData: true,
                subtree: true,
            });
        });
    };

    observer = new MutationObserver((mutationList, observer) => {
        const [mutationRecord] = mutationList;
        popupTrigger(mutationRecord.target);
        textDeliver();
    });

    constructor(section) {
        this.init(section);
    }
};

const sectionObserver = () => {
    const doms = [
        ...document.querySelectorAll(
            "main > *:not(.contents), .contents > *, .popup > *"
        ),
    ];
    doms.forEach((section) => new Section(section));
};

export default sectionObserver;
