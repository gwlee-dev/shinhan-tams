export const DynamicTable = class {
    getChecks = () =>
        [...this.root.querySelectorAll(`[name=${this.chkAll.name}]`)].filter(
            (el) => !el.id.endsWith("-all")
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

    setId = () => {
        this.getChecks().forEach((chk, idx) => {
            const tr = chk.parentNode.parentNode;
            [...tr.querySelectorAll("input, button")].forEach(
                (control) => (control.id = `${control.name}-${idx + 1}`)
            );
        });
    };

    addRow = (...arg) => {
        const tr = this.tr.cloneNode(true);
        const btn = tr.querySelector(".row-remove-btn");
        btn && btn.addEventListener("click", this.removeRow);
        this.tbody.append(tr);
        if (arg.length > 0) {
            arg[0].constructor.name.endsWith("Event") && arg.shift();
            const controls = [...tr.querySelectorAll(".row-control")];
            controls
                .filter((el, idx) => arg[idx])
                .forEach((el, idx) => {
                    if (typeof arg[idx] === "string") {
                        if (el.tagName && el.tagName !== "INPUT") {
                            el.innerHTML = arg[idx];
                        } else {
                            el[el.type === "checkbox" ? "checked" : "value"] =
                                arg[idx];
                        }
                    }
                    if (typeof arg[idx] === "object") {
                        arg[idx].class && (el.className = arg[idx].class);
                        arg[idx].inner && (el.innerHTML = arg[idx].inner);
                        Object.assign(el, arg[idx]);
                    }
                });
        }
        this.setId();
        this.bindChkEvent(tr);
        document.body.scrollTop = document.body.scrollHeight;
        tr.querySelector("input:first-child").focus();
        tr.querySelector("input:first-child").blur();
    };

    bindChkEvent = (tr) => {
        const check = tr.querySelector("[type=checkbox]");
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

    createChkTd = () => {
        const chkTd = document.createElement("td");
        const chk = this.chkAll.cloneNode(true);
        chk.id = "";
        chkTd.append(chk);
        return chkTd;
    };

    makeTemplate = () => {
        this.tr.innerHTML = "";

        const headers = [...this.thead.querySelectorAll("th[data-gr-tag]")];
        const tds = this.template
            ? Object.keys(this.template).map((key) => {
                  const td = document.createElement("td");
                  const { rootClass, attribute } = this.template[key];
                  rootClass && (td.className = rootClass);
                  const control = document.createElement(
                      this.template[key].tag
                  );
                  Object.assign(control, attribute);
                  control.className = attribute.className;
                  control.classList.add("row-control");
                  td.append(control);
                  return td;
              })
            : headers.map((header) => {
                  const td = document.createElement("td");
                  const tdClass = header.getAttribute("data-gr-class");
                  tdClass && (td.className = tdClass);
                  const control = document.createElement(
                      header.getAttribute("data-gr-tag")
                  );
                  const tagClass = header.getAttribute("data-gr-tag-class");
                  tagClass && (control.className = tagClass);
                  const tagInner = header.getAttribute("data-gr-tag-inner");
                  tagInner && (control.innerHTML = tagInner);
                  const attributes = {};
                  [...header.attributes]
                      .filter(
                          ({ name }) =>
                              name !== "data-gr-tag-class" &&
                              name !== "data-gr-tag-inner" &&
                              name.startsWith("data-gr-tag-")
                      )
                      .forEach(({ name, value }) => {
                          attributes[name.replace("data-gr-tag-", "")] = value;
                      });
                  Object.assign(control, attributes);
                  control.classList.add("row-control");
                  td.append(control);
                  return td;
              });
        this.tr.append(this.chkAll && this.createChkTd(), ...tds);
    };

    observer = {
        thead: new MutationObserver(() => {
            this.makeTemplate();
            this.setId();
        }),
        tbody: new MutationObserver(() => {
            this.getChecks().forEach((el) => {
                el.addEventListener("click", this.processChecks);
            });
            this.getRemoveButtons().forEach((el) =>
                el.addEventListener("click", this.removeRow)
            );
            this.setId();
        }),
    };

    init = (option) => {
        this.counter = [...this.root.querySelectorAll(".row-counter")];
        this.addBtn = [...this.root.querySelectorAll(".row-add-btn")];
        this.locked = [...this.root.querySelectorAll(".row-locked")];
        this.table = this.root.querySelector("table");
        this.thead = this.root.querySelector("thead");
        this.tbody = this.root.querySelector("tbody");
        this.tr = document.createElement("tr");
        this.chkAll = this.root.querySelector("[type=checkbox][id$=all]");
        Object.assign(this, option);

        // chkAll
        if (this.chkAll) {
            this.chkAll.addEventListener("click", this.verifyChecked);
            this.chkAll.addEventListener("click", this.processChecks);
            this.getChecks().forEach((el) => {
                el.addEventListener("click", this.processChecks);
            });
            this.observer.tbody.observe(this.tbody, {
                childList: true,
            });
            this.observer.thead.observe(this.thead.children[0], {
                childList: true,
            });
        }

        // remove
        this.getRemoveButtons().forEach((el) =>
            el.addEventListener("click", this.removeRow)
        );

        // add
        this.makeTemplate();
        this.addBtn.forEach((el) => el.addEventListener("click", this.addRow));
    };

    constructor(root, option) {
        typeof root.constructor.name.endsWith("Element") && (this.root = root);
        this.init(option ?? {});
    }
};

const dynamicTableInit = () => {
    const elements = document.querySelectorAll(".dynamic-table");
    [...elements].forEach((el) => {
        Object.assign(el, new DynamicTable(el));
    });
};

export default dynamicTableInit;
