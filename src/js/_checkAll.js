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
