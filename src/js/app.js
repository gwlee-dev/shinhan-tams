import * as bootstrap from "bootstrap";
import navInit from "./_navbarOffcanvas";
import popupTrigger from "./_popupTrigger";
import resetInput from "./_resetInput";
import editorEnabler from "./editorEnabler";
import switchOpen from "./_switchOpen";
import dynamicTableInit from "./dynamicTable";
import datepickerInit from "./datepicker";
import emergencyModal from "./_emergencyModal";
import preloader from "./_preloader";

const initFuncs = {
    preloader,
    navInit,
    popupTrigger,
    resetInput,
    editorEnabler,
    switchOpen,
    dynamicTableInit,
    datepickerInit,
    emergencyModal,
};

(() => {
    Object.keys(initFuncs).forEach((key) => initFuncs[key]());
    window.bootstrap = bootstrap;
    window.pop = (e) => alert(e);
})();
