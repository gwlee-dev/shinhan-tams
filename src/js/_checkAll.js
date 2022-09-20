[...document.querySelectorAll("[type=checkbox]")]
    .filter((x) => x.id.endsWith("-all"))
    .forEach((x) => {
        const targets = [...document.querySelectorAll(`[name=${x.name}]`)];
        x.addEventListener("click", () => {
            x.checked
                ? targets.forEach((el) => {
                      el.checked = true;
                  })
                : targets.forEach((el) => {
                      el.checked = false;
                  });
        });
        const counterId = x.getAttribute("data-gr-count");
        if (counterId !== null) {
            targets.forEach((el) =>
                el.addEventListener("click", () => {
                    console.log("adafdsf");
                    const counterEl = document.querySelector(counterId);
                    counterEl.innerText = targets.filter(
                        (x) => x.checked && !x.id.endsWith("-all")
                    ).length;
                })
            );
        }
    });

[...document.querySelectorAll(".btn-conditional")].forEach((x) => {
    const target = document.querySelectorAll(x.getAttribute("data-gr-target"));
    target.forEach((t) => {
        t.addEventListener("click", () => {
            if (t.checked) {
                x.removeAttribute("disabled");
            }
        });
    });
});
