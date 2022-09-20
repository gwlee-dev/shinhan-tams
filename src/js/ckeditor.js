import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic/build/ckeditor";
import "@ckeditor/ckeditor5-build-classic/build/translations/ko";

document.querySelectorAll(".editor").forEach((el) => {
    try {
        ClassicEditor.create(el, {
            language: "ko",
        });
    } catch (error) {
        console.error(error);
    }
});
