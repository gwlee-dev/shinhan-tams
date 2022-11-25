import TAMSEditor from "../ckeditor/build/ckeditor";

const editorEnabler = () => {
    const elements = document.querySelectorAll(".editor");
    [...elements].forEach(async (el) => {
        try {
            el.ck = await TAMSEditor.create(el, {
                simpleUpload: {
                    uploadUrl: prompt(
                        "(임시) 이미지 서버 URL 입력",
                        "http://localhost:4000/"
                    ),
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

editorEnabler();
