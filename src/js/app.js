import * as bootstrap from "bootstrap";
<<<<<<< HEAD
import conditionalEnable from "./_conditionalEnable";
=======
>>>>>>> cf5c0cccd822fe4bd5478ccb94746a2477b7d3f5
import modalVarying from "./_modalVarying";
import multiModal from "./_multiModal";
import navInit from "./_navbarOffcanvas";
import popupTrigger from "./_popupTrigger";
import resetInput from "./_resetInput";
import editorEnabler from "./editorEnabler";
import linkInput from "./_linkInput";

<<<<<<< HEAD
const initFuncs = {
=======
const functions = {
>>>>>>> cf5c0cccd822fe4bd5478ccb94746a2477b7d3f5
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
