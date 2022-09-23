import * as bootstrap from "bootstrap";
import conditionalEnable from "./_conditionalEnable";
import modalVarying from "./_modalVarying";
import multiModal from "./_multiModal";
import navInit from "./_navbarOffcanvas";
import popupTrigger from "./_popupTrigger";
import resetInput from "./_resetInput";
import editorEnabler from "./editorEnabler";
import linkInput from "./_linkInput";

const initFuncs = {
    modalVarying,
    multiModal,
    navInit,
    popupTrigger,
    resetInput,
    editorEnabler,
    conditionalEnable,
    linkInput,
};

(() => {
    Object.keys(initFuncs).forEach((key) => initFuncs[key]());
    window.bootstrap = bootstrap;
})();
