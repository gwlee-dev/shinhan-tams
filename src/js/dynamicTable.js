export const DynamicTable = class {
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

    processChecks = () => {
        // counter
        const { length } = this.getChecks().filter((el) => el.checked);
        this.counter.forEach((el) => (el.innerHTML = length));
        this.locked.forEach((el) => (el.disabled = length === 0));

        // toggle
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
        btn && btn.addEventListener("click", this.removeRow);
        this.tbody.append(tr);
        this.setId(tr);
        if (this.chkAll) {
            check.addEventListener("click", this.processChecks);
            this.processChecks(tr);
        }
    };

    removeRow = (specified) => {
        specified.constructor.name === "PointerEvent" &&
            specified.target.parentNode.parentNode.remove();
        specified.constructor.name === "HTMLTableRowElement" &&
            specified.remove();
        typeof specified === "number" &&
            this.tbody.querySelector(`tr:nth-child(${specified})`).remove();
        this.chkAll && this.processChecks();
    };

    init = (option) => {
        this.counter = [...this.root.querySelectorAll(".row-counter")];
        this.addBtn = [...this.root.querySelectorAll(".row-add-btn")];
        this.locked = [...this.root.querySelectorAll(".row-locked")];
        Object.assign(this, option);

        // chkAll
        this.chkAll = this.root.querySelector("[type=checkbox][id$=all]");
        if (this.chkAll) {
            this.chkAll.addEventListener("click", this.verifyChecked);
            this.chkAll.addEventListener("click", this.processChecks);
            this.getChecks().forEach((el) => {
                el.addEventListener("click", this.processChecks);
            });
        }

        // remove
        this.getRemoveButtons().length !== 0 &&
            this.getRemoveButtons().forEach((el) =>
                el.addEventListener("click", this.removeRow)
            );

        // add

        const createChkTd = () => {
            const chkTd = document.createElement("td");
            const chk = this.chkAll.cloneNode(true);
            chkTd.append(chk);
            return chkTd;
        };

        if (this.addBtn.length > 0) {
            this.thead = this.root.querySelector("thead");
            this.tbody = this.root.querySelector("tbody");
            this.tr = document.createElement("tr");
            const headers = [...this.thead.querySelectorAll("th[data-gr-tag]")];
            const tds = this.template
                ? Object.keys(this.template).map((key) => {
                      const td = document.createElement("td");
                      const { rootClass, attribute } = this.template[key];
                      td.className = rootClass || "";
                      const control = document.createElement(
                          this.template[key].tag
                      );
                      Object.assign(control, attribute);
                      control.className = attribute.className;
                      td.append(control);
                      return td;
                  })
                : headers.map((header) => {
                      const td = document.createElement("td");
                      td.className = header.getAttribute("data-gr-class") || "";
                      const control = document.createElement(
                          header.getAttribute("data-gr-tag")
                      );
                      control.className =
                          header.getAttribute("data-gr-tag-class") || "";
                      control.innerHTML =
                          header.getAttribute("data-gr-tag-inner") || "";
                      const attributes = {};
                      [...header.attributes]
                          .filter(
                              ({ name }) =>
                                  name !== "data-gr-tag-class" &&
                                  name !== "data-gr-tag-inner" &&
                                  name.startsWith("data-gr-tag-")
                          )
                          .forEach(({ name, value }) => {
                              attributes[name.replace("data-gr-tag-", "")] =
                                  value;
                          });
                      Object.assign(control, attributes);
                      td.append(control);
                      return td;
                  });
            this.tr.append(this.chkAll && createChkTd(), ...tds);
            this.addBtn.forEach((el) =>
                el.addEventListener("click", this.appendRow)
            );
        }
    };

    constructor(root, option) {
        typeof root.constructor.name.endsWith("Element") && (this.root = root);
        this.init(option ?? {});
    }
};

export const dynamicTableInit = () =>
    [...document.querySelectorAll(".dynamic-table")].forEach((el) => {
        el.instance = new DynamicTable(el);
    });
