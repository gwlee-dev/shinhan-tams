import TAMSEditor from "../ckeditor/build/ckeditor";

const editorEnabler = () => {
    document.querySelectorAll(".editor").forEach(async (el) => {
        try {
            el.ck = await TAMSEditor.create(el, {
                simpleUpload: {
                    uploadUrl: "http://localhost:4000/",
                },
            });
            const dropdowns = await document.querySelectorAll(
                `[data-cke-tooltip-text="글꼴 집합"]`
            );
            [...dropdowns].forEach((dropdown) => {
                const items =
                    dropdown.nextElementSibling.querySelectorAll(
                        ".ck-button__label"
                    );
                const fontSet = {
                    OneShinhan: "원신한",
                    ShinhanCard: "신한카드",
                    "Nanum Gothic": "나눔고딕",
                    "Nanum Myeongjo": "나눔명조",
                };

                [...items].forEach((span) => {
                    Object.keys(fontSet).forEach((x) => {
                        span.innerText === x && (span.innerText = fontSet[x]);
                    });
                });
            });
        } catch (error) {
            console.error(error);
        }
    });
};

export default editorEnabler;
