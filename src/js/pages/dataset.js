import DynamicTable from "../dynamicTable";

const init = () => {
    const el = document.querySelector("#column-management");
    el.instance = new DynamicTable({
        root: el,
        counter: document.querySelector("#column-count"),
        addBtn: document.querySelector(".row-add-btn"),
        locked: document.querySelector("#column-remove-btn"),
        template: [
            {
                rootClass: "p-0 overflow-visible",
                tag: "input",
                attribute: {
                    type: "text",
                    className:
                        "form-control form-control-sm lh-sm rounded-0 border-0",
                    name: "column-name",
                },
            },
            {
                rootClass: "p-0 overflow-visible",
                tag: "input",
                attribute: {
                    className:
                        "form-control form-control-sm lh-sm rounded-0 border-0",
                    type: "text",
                    name: "describe",
                },
            },
            {
                tag: "button",
                attribute: {
                    className:
                        "btn btn-sm btn-outline-danger py-0 row-remove-btn",
                    name: "describe",
                    innerText: "삭제",
                },
            },
        ],
    });
};

init();
