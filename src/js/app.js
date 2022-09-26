import * as bootstrap from "bootstrap";
import modalVarying from "./_modalVarying";
import multiModal from "./_multiModal";
import navInit from "./_navbarOffcanvas";
import popupTrigger from "./_popupTrigger";
import resetInput from "./_resetInput";
import editorEnabler from "./editorEnabler";
import switchOpen from "./_switchOpen";
import { dynamicTableInit } from "./dynamicTable";

const initFuncs = {
    modalVarying,
    multiModal,
    navInit,
    popupTrigger,
    resetInput,
    editorEnabler,
    switchOpen,
    dynamicTableInit,
};

(() => {
    Object.keys(initFuncs).forEach((key) => initFuncs[key]());
    window.bootstrap = bootstrap;
})();
