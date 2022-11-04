import navInit from "./_navbarOffcanvas";
import popupTrigger from "./_popupTrigger";
import resetInput from "./_resetInput";
// import editorEnabler from "./_editorEnabler";
import switchOpen from "./_switchOpen";
import dynamicTableInit from "./_dynamicTable";
import datepickerInit from "./_datepicker";
import emergencyModal from "./_emergencyModal";
import preloader from "./_preloader";
import textDeliver from "./_textDeliver";
import popupController from "./_popupController";
import { Modal } from "bootstrap";

const initFuncs = {
    preloader,
    navInit,
    popupTrigger,
    resetInput,
    // editorEnabler,
    switchOpen,
    dynamicTableInit,
    datepickerInit,
    emergencyModal,
    textDeliver,
    popupController,
};

(() => {
    Object.keys(initFuncs).forEach((key) => initFuncs[key]());
    window.Modal = Modal;
})();

// const myModalEl = document.getElementById("danger-modal");
// myModalEl.addEventListener("show.bs.modal", (event) => {
//     console.log(event.relatedTarget.getAttribute("data-test"));
// });
