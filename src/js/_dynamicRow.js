[...document.querySelectorAll(".dynamic-row")].forEach((section) => {
    const tbody = section.querySelector("tbody");
    const td = () => document.createElement("td");
    const input = () => document.createElement("input");

    const rowRemoveFunc = (e) => {
        // if (tbody.querySelectorAll("tr").length > 1) {
        e.target.parentNode.parentNode.remove();
        // }
    };

    const rowAddFunc = () => {
        console.log("hi");
        const tr = document.createElement("tr");
        const chkTd = td();
        const nameTd = td();
        const describeTd = td();
        const btnTd = td();

        const chk = input();
        chk.className = "form-check-input";
        chk.type = "checkbox";
        chk.name = "column";
        chkTd.append(chk);

        const btn = document.createElement("btn");
        btn.className = "btn btn-sm btn-outline-danger py-0 row-remove-btn";
        btn.innerText = "삭제";
        btn.addEventListener("click", (e) => rowRemoveFunc(e));
        btnTd.append(btn);

        [nameTd, describeTd].forEach((x) => {
            x.className = "p-0 overflow-visible";
            const el = input();
            el.className =
                "form-control form-control-sm lh-sm rounded-0 border-0";
            el.type = "text";
            x.append(el);
        });

        tr.append(chkTd, nameTd, describeTd, btnTd);
        tbody.append(tr);
    };

    section
        .querySelector(".row-add-btn")
        .addEventListener("click", () => rowAddFunc());

    [...section.querySelectorAll(".row-remove-btn")].forEach((btn) => {
        btn.addEventListener("click", (e) => rowRemoveFunc(e));
    });
});
