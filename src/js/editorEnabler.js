import TAMSEditor from "../ckeditor/build/ckeditor";

const editorEnabler = () =>
    document.querySelectorAll(".editor").forEach((el) => {
        try {
            TAMSEditor.create(el);
        } catch (error) {
            console.error(error);
        }
    });

export default editorEnabler;
