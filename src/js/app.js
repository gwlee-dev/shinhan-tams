import * as bootstrap from "bootstrap";
import checkAll from "./_checkAll";
import conditionalEnable from "./_conditionalEnable";
import dynamicRow from "./_dynamicRow";
import modalVarying from "./_modalVarying";
import multiModal from "./_multiModal";
import navInit from "./_navbarOffcanvas";
import popupTrigger from "./_popupTrigger";
import resetInput from "./_resetInput";
import editorEnabler from "./editorEnabler";

const functions = {
    checkAll,
    conditionalEnable,
    dynamicRow,
    modalVarying,
    multiModal,
    navInit,
    popupTrigger,
    resetInput,
    editorEnabler,
};

(() => {
    Object.keys(functions).forEach((key) => functions[key]());
    Object.assign(window, functions);
    window.bootstrap = bootstrap;
})();
