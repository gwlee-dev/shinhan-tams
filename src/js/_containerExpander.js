const containerInitFunc = () => {
    const expandButton = document.querySelector(".expand-button");
    const contentsArea = document.querySelector(".contents");

    expandButton.addEventListener("click", () => {
        expandButton.classList.toggle("expanded");
        contentsArea.classList.toggle("container");
    });
};

containerInitFunc();
