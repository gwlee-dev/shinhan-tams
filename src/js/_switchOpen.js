import { Collapse } from "bootstrap";

const switchOpen = () => {
    const queriedElements = [
        ...document.querySelectorAll("[data-gr-type=opener]"),
    ];
    const relativeElements = queriedElements.map((x) => {
        return {
            relative: x,
            target: document.querySelector(x.getAttribute("data-gr-target")),
        };
    });

    // switch-collapse
    const switchCollapse = relativeElements.filter(({ target }) =>
        [...target.classList].includes("collapse")
    );

    switchCollapse.forEach(({ relative, target }) => {
        const switchClickHandler = () => {
            const instance = new Collapse(target, { toggle: false });
            relative.checked ? instance.show() : instance.hide();
        };
        relative.addEventListener("click", switchClickHandler);
        const popup = document.querySelector(".popup");
        popup !== null &&
            relative.addEventListener("transitionend", () =>
                setTimeout(popup.instance.position, 200)
            );
    });
};

export default switchOpen;
