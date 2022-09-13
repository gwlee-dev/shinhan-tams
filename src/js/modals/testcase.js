import { varyingFunc } from "../_modalVarying";

const caseEditForm = (modal, button) => {
    if (modal.id === "case-editor") {
        [...modal.querySelectorAll("[disabled]")].forEach((x) => {
            x.disabled = false;
        });
        if ([...button.classList].includes("case-edit-btn")) {
            [...modal.querySelectorAll(".form-control, .form-select")]
                .filter(
                    (x) => x.name !== "input-value" && x.name !== "output-value"
                )
                .forEach((x) => (x.disabled = true));
        }
        if ([...button.classList].includes("case-detail-btn")) {
            [...modal.querySelectorAll(".form-control, .form-select")].forEach(
                (x) => (x.disabled = true)
            );
        }
    }
};

export const testcase = () => varyingFunc(caseEditForm);
