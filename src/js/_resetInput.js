const reset = (e) => {
    e.target.previousElementSibling.value = "";
};

const resetInputFunc = () => {
    const buttons = [...document.querySelectorAll(".input-reset")];
    buttons.forEach((x) => x.addEventListener("click", reset));
};

export default resetInputFunc;
