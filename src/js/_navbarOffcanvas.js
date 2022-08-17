import { Offcanvas } from "bootstrap";

const navInitFunc = () => {
    const targets = [...document.querySelectorAll(".navbar .nav-link")].map(
        (x) => {
            const target = document.querySelector(
                x.getAttribute("data-gr-target")
            );
            return {
                button: x,
                target,
                instance: new Offcanvas(target),
            };
        }
    );

    let timeout;

    const menuClose = () => {
        clearTimeout(timeout);
        targets.forEach((x) => x.instance.hide());
    };
    const menuOpen = (e) => {
        timeout = setTimeout(() => {
            targets.forEach(({ button, instance }) => {
                if (button !== e.target) {
                    instance.hide();
                } else {
                    instance.show();
                }
            });
        }, 100);
    };

    targets.forEach(({ button, target }) => {
        button.addEventListener("mouseenter", menuOpen);
        target.addEventListener("mouseleave", menuClose);
    });
};

navInitFunc();
