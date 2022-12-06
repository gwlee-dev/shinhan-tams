import TAMSEditor from "../ckeditor/build/ckeditor";

console.log("TamsEditor.js / 221205 1529");

export const createEditor = async (el, option) => {
    console.log(option);
    const { uploadUrl, onImageRemove, onReady } = option;
    const setMenus = () => {
        const dropdowns = document.querySelectorAll(
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
    };

    try {
        const instance = await TAMSEditor.create(el, {
            simpleUpload: {
                uploadUrl:
                    uploadUrl ||
                    prompt(
                        "(임시) 이미지 서버 URL 입력",
                        "http://localhost:4000/"
                    ),
            },
            imageRemoveEvent: {
                additionalElementTypes: ["image", "imageBlock", "imageInline"],
                callback: onImageRemove || null,
            },
        });
        await setMenus();
        onReady && (await onReady(instance));
    } catch (error) {
        console.error(error);
    }
};

const editorEnabler = () => {
    const elements = document.querySelectorAll("[data-gr-type=editor]");
    [...elements].forEach((el) => Object.assign(el, createEditor(el)));
};

editorEnabler();
(() => (window.createEditor = createEditor))();
