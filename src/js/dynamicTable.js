const DynamicTable = class {
    getChecks = (findAll) =>
        [...this.root.querySelectorAll(`[name=${this.chkAll.name}]`)].filter(
            (el) => !el.id.endsWith("-all") || findAll
        );

    getRemoveButtons = () => [...this.root.querySelectorAll(".row-remove-btn")];

    verifyChecked = () => this.checkAll(this.chkAll.checked);

    checkAll = (goal) => {
        this.chkAll.indeterminate = false;
        this.getChecks().forEach((el) => (el.checked = goal));
    };

    countChecks = () => {
        const { length } = this.getChecks().filter((el) => el.checked);
        this.counter.innerHTML = length;
        typeof this.locked !== "undefined" &&
            (this.locked.disabled = length === 0);
        if (length !== this.getChecks().length && this.chkAll.checked) {
            this.chkAll.indeterminate = true;
        }
        if (length === this.getChecks().length) {
            this.chkAll.indeterminate = false;
            this.chkAll.checked = true;
        }
        if (length === 0) {
            this.chkAll.indeterminate = false;
            this.chkAll.checked = false;
        }
    };

    setId = (tr) => {
        const idx = this.getChecks().length + 1;
        [...tr.querySelectorAll("input, button")].forEach(
            (control) => (control.id = `${control.name}-${idx}`)
        );
    };

    appendRow = () => {
        const tr = this.tr.cloneNode(true);
        const check = tr.querySelector("[type=checkbox]");
        const btn = tr.querySelector(".row-remove-btn");
        btn.addEventListener("click", this.removeRow);
        this.tbody.append(tr);
        this.setId(tr);
        if (typeof this.counter !== "undefined") {
            check.addEventListener("click", this.countChecks);
            this.countChecks(tr);
        }
    };

    removeRow = (specified) => {
        specified.constructor.name === "PointerEvent" &&
            specified.target.parentNode.parentNode.remove();
        specified.constructor.name === "HTMLTableRowElement" &&
            specified.remove();
        typeof specified === "number" &&
            this.tbody.querySelector(`tr:nth-child(${specified})`).remove();
        typeof this.counter !== "undefined" && this.countChecks();
    };

    constructor(option) {
        Object.assign(this, option);

        // chkAll
        this.chkAll = this.root.querySelector("[type=checkbox][id$=all]");
        if (typeof this.chkAll !== "undefined") {
            this.chkAll.addEventListener("click", this.verifyChecked);
            if (typeof this.counter !== "undefined") {
                this.chkAll.addEventListener("click", this.countChecks);
                this.getChecks().forEach((el) => {
                    el.addEventListener("click", this.countChecks);
                });
            }
        }

        // remove
        this.getRemoveButtons().length !== 0 &&
            this.getRemoveButtons().forEach((el) =>
                el.addEventListener("click", this.removeRow)
            );

        // add
        if (typeof this.addBtn !== "undefined") {
            this.tbody = this.root.querySelector("tbody");
            this.tr = document.createElement("tr");
            const chkTd = document.createElement("td");
            const chk = this.chkAll.cloneNode(true);
            chkTd.append(chk);
            const tds = Object.keys(this.template).map((key) => {
                const td = document.createElement("td");
                const { rootClass, attribute } = this.template[key];
                td.className = rootClass || "";
                const control = document.createElement(this.template[key].tag);
                Object.assign(control, attribute);
                control.className = attribute.className;
                td.append(control);
                return td;
            });
            this.tr.append(chkTd, ...tds);
            this.addBtn.addEventListener("click", this.appendRow);
        }
    }
};

export default DynamicTable;
