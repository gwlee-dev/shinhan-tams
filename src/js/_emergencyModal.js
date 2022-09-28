import { Modal } from "bootstrap";

const emergencyModal = () => {
    if (document.body.hasAttribute("data-gr-dismiss")) {
        const queue = document.body
            .getAttribute("data-gr-dismiss")
            .split(" ")
            .map((query) => document.querySelector(query));
        new Modal(queue[0]).show();
        if (queue.length > 1) {
            queue.forEach((current, idx) => {
                const next = queue[idx + 1];
                next &&
                    current.addEventListener("hide.bs.modal", () =>
                        new Modal(next).show()
                    );
            });
        }
    }
};

export default emergencyModal;
