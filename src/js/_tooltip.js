import { Tooltip } from "bootstrap";

export const tooltipEnabler = (target) => {
    console.log("tams.js ", target);
    const targets = [...target.querySelectorAll('[data-bs-toggle="tooltip"]')];
    targets.forEach((el) => Tooltip.getOrCreateInstance(el));
};

export const tooltipInit = () => {
    tooltipEnabler(document);
};
