import { varyingFunc } from "../_modalVarying";

const caseEditForm = (modal, button) => {
    if (modal.id === "case-editor") {
        [...modal.querySelectorAll("[disabled]")].forEach((x) => {
            x.disabled = false;
        });
        if (button.id === "case-edit-btn") {
            [...modal.querySelectorAll(".form-control, .form-select")]
                .filter(
                    (x) => x.name !== "input-value" && x.name !== "output-value"
                )
                .forEach((x) => (x.disabled = true));
        }
        if (button.id === "case-detail-btn") {
            [...modal.querySelectorAll(".form-control, .form-select")].forEach(
                (x) => (x.disabled = true)
            );
        }
    }
};

varyingFunc(caseEditForm);
