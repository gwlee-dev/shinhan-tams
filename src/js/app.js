import navInit from "./_navbarOffcanvas";
import { pop, popupTrigger } from "./_popupTrigger";
import resetInput from "./_resetInput";
// import editorEnabler from "./_editorEnabler";
import switchOpen from "./_switchOpen";
import dynamicTableInit from "./_dynamicTable";
import datepickerInit from "./_datepicker";
import emergencyModal from "./_emergencyModal";
import { preloader, Loading } from "./_loader";
import textDeliver from "./_textDeliver";
import popupController from "./_popupController";
import tableObserver from "./_tableObserver";
import { Modal } from "bootstrap";
import Toast from "./_toast";
import makeExcel from "./_excel";

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
    tableObserver,
};

const globals = {
    Modal,
    Toast,
    makeExcel,
    Loading,
    pop,
};

document.addEventListener("DOMContentLoaded", () => {
    Object.keys(initFuncs).forEach((key) => {
        initFuncs[key]();
    });
    Object.assign(window, globals);
});
