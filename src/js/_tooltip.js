import { Tooltip } from "bootstrap";

export const tooltipEnabler = (target) => {
    const targets = [...target.querySelectorAll('[data-bs-toggle="tooltip"]')];
    targets.forEach((el) => new Tooltip(el));
};

export const tooltipInit = () => {
    tooltipEnabler(document);
};
