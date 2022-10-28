import navInit from "./_navbarOffcanvas";
import popupTrigger from "./_popupTrigger";
import resetInput from "./_resetInput";
import editorEnabler from "./_editorEnabler";
import switchOpen from "./_switchOpen";
import dynamicTableInit from "./_dynamicTable";
import datepickerInit from "./_datepicker";
import emergencyModal from "./_emergencyModal";
import preloader from "./_preloader";
import textDeliver from "./_textDeliver";
import popupController from "./_popupController";

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
    textDeliver,
    popupController,
};

(() => {
    Object.keys(initFuncs).forEach((key) => initFuncs[key]());
})();
