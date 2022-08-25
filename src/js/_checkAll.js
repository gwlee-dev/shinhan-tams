[...document.querySelectorAll("[type=checkbox]")]
    .filter((x) => x.id.endsWith("-all"))
    .forEach((x) => {
        x.addEventListener("click", () => {
            const targets = [...document.querySelectorAll(`[name=${x.name}]`)];
            x.checked
                ? targets.forEach((el) => {
                      el.checked = true;
                  })
                : targets.forEach((el) => {
                      el.checked = false;
                  });
        });
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
