import TAMSEditor from "../ckeditor/build/ckeditor";

document.querySelectorAll(".editor").forEach((el) => {
    try {
        TAMSEditor.create(el);
    } catch (error) {
        console.error(error);
    }
});
