import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const capture = async (e) => {
    const ID = "ck-cloned";
    const DPI = 72;
    const editorEl = e.target.nextElementSibling;
    const htmlStr = editorEl.ck.getData();
    const content = document.createElement("div");
    const editorWidth =
        editorEl.nextElementSibling.getBoundingClientRect().width;
    const pageWidth = (595.28 * 96) / DPI;
    const transformRatio = pageWidth / editorWidth;

    content.className = "ck ck-reset ck-editor ck-editor__editable_inline";
    content.id = ID;
    content.innerHTML = htmlStr;
    // content.style.width = "595.28mm";
    // content.style.display = "none";
    content.style.maxWidth = editorWidth + "px";
    // const heightPX = 841.89 * 96 / DPI;js

    document.querySelector("main .container").append(content);
    const canvas = await html2canvas(document.querySelector("#ck-cloned"), {
        allowTaint: true,
        onclone: (clonedDoc) => {
            const el = clonedDoc.getElementById(ID);
            el.style.display = "";
            el.style.transform = `scale(${transformRatio})`;
        },
    });
    await document.querySelector("main .container").appendChild(canvas);
    console.log(canvas);
    const doc = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: "a4",
    });
    doc.addImage({ imageData: canvas });
    doc.save();
};

const pdfExport = () => {
    document.querySelector("#download-btn").addEventListener("click", capture);
};

export default pdfExport;
