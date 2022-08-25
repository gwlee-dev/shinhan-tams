const resetInputFunc = () => {
    const buttons = [...document.querySelectorAll(".input-reset")];
    buttons.forEach((x) => {
        x.addEventListener("click", () => {
            x.previousElementSibling.value = "";
        });
    });
};

resetInputFunc();
