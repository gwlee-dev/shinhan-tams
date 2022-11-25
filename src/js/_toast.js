import { Toast } from "bootstrap";

const toastEl = (contents, className) => {
    const el = document.createElement("div");
    const body = document.createElement("div");
    el.className = `toast align-items-center ${className}`;
    className && el.classList.add(className.split(" "));
    body.className = "toast-body text-center fs-6";
    body.innerHTML = contents;
    el.append(body);
    return el;
};

const Toaster = class {
    container = document.querySelector(".toast-container");
    constructor(contents, className, delay) {
        this.element = toastEl(contents, className);
        this.container.append(this.element);
        this.instance = Toast.getOrCreateInstance(
            this.element,
            delay ? { delay } : null
        );
        this.element.addEventListener("hidden.bs.toast", (e) =>
            e.target.remove()
        );
        this.instance.show();
    }
};

const makeToast = (contents, className, delay) =>
    new Toaster(contents, className, delay);

export default makeToast;
