import popupTrigger from "./_popupTrigger";
import textDeliver from "./_textDeliver";
import { tooltipEnabler } from "./_tooltip";

const Section = class {
    init = (target) => {
        const targets = [...target.querySelectorAll("tbody, .hstack")];
        targets
            .map((el) => el.cloneNode(true))
            .filter((el) => el?.id === "fdToolbar")
            .forEach((el) => console.log(el));

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
        console.log("요소추가 발생", mutationRecord.target);
        popupTrigger(mutationRecord.target);
        textDeliver();
        tooltipEnabler(mutationRecord.target);
        this.init(mutationRecord.target);
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
