import * as bootstrap from "bootstrap";
import modalVarying from "./_modalVarying";
import multiModal from "./_multiModal";
import navInit from "./_navbarOffcanvas";
import popupTrigger from "./_popupTrigger";
import resetInput from "./_resetInput";
import editorEnabler from "./editorEnabler";

const functions = {
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
