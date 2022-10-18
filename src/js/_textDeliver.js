const delivery = (e) => {
    const { target: el } = e;
    const target = el.getAttribute("data-gr-target");
    const targetEl = document.querySelector(target);
    targetEl.focus();
    targetEl.value = el.innerText;
};

const textDeliver = () => {
    const links = [...document.querySelectorAll(".text-deliver")];
    links.forEach((el) => {
        el.addEventListener("click", delivery);
    });
};

export default textDeliver;
