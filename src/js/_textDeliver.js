const delivery = (e) => {
    const { target: el } = e;
    const target = el.getAttribute("data-gr-target");
    const targetEl = document.querySelector(target);
    targetEl.focus();
    targetEl.value = el.innerText;
};

const textDeliver = () => {
    const elements = document.querySelectorAll(".text-deliver");
    [...elements].forEach((el) => {
        el.removeEventListener("click", delivery);
        el.addEventListener("click", delivery);
    });
};

export default textDeliver;
