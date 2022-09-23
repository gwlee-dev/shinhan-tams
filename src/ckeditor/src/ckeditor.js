/**
 * @license Copyright (c) 2014-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor.js";
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment.js";
import AutoImage from "@ckeditor/ckeditor5-image/src/autoimage.js";
import AutoLink from "@ckeditor/ckeditor5-link/src/autolink.js";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote.js";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold.js";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials.js";
import FindAndReplace from "@ckeditor/ckeditor5-find-and-replace/src/findandreplace.js";
import FontColor from "@ckeditor/ckeditor5-font/src/fontcolor.js";
import FontFamily from "@ckeditor/ckeditor5-font/src/fontfamily.js";
import FontSize from "@ckeditor/ckeditor5-font/src/fontsize.js";
import Highlight from "@ckeditor/ckeditor5-highlight/src/highlight.js";
import Image from "@ckeditor/ckeditor5-image/src/image.js";
import ImageResize from "@ckeditor/ckeditor5-image/src/imageresize.js";
import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload.js";
import Indent from "@ckeditor/ckeditor5-indent/src/indent.js";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic.js";
import Link from "@ckeditor/ckeditor5-link/src/link.js";
import LinkImage from "@ckeditor/ckeditor5-link/src/linkimage.js";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph.js";
import SimpleUploadAdapter from "@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter.js";
import Table from "@ckeditor/ckeditor5-table/src/table.js";
import TableCellProperties from "@ckeditor/ckeditor5-table/src/tablecellproperties";
import TableColumnResize from "@ckeditor/ckeditor5-table/src/tablecolumnresize.js";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar.js";
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline.js";
import WordCount from "@ckeditor/ckeditor5-word-count/src/wordcount.js";

class TAMSEditor extends ClassicEditor {}

// Plugins to include in the build.
TAMSEditor.builtinPlugins = [
    Alignment,
    AutoImage,
    AutoLink,
    BlockQuote,
    Bold,
    Essentials,
    FindAndReplace,
    FontColor,
    FontFamily,
    FontSize,
    Highlight,
    Image,
    ImageResize,
    ImageUpload,
    Indent,
    Italic,
    Link,
    LinkImage,
    Paragraph,
    SimpleUploadAdapter,
    Table,
    TableCellProperties,
    TableColumnResize,
    TableToolbar,
    Underline,
    WordCount,
];

// Editor configuration.
TAMSEditor.defaultConfig = {
    fontSize: {
        options: [11, 13, 15, "default", 19, 24, 28, 30, 34, 38],
    },
    fontFamily: {
        options: [
            "default",
            "OneShinhan",
            "ShinhanCard",
            "Nanum Gothic",
            "Nanum Myeongjo",
        ],
    },

    toolbar: {
        items: [
            "fontSize",
            "fontFamily",
            "fontColor",
            "highlight",
            "|",
            "bold",
            "italic",
            "underline",
            "|",
            "alignment",
            "outdent",
            "indent",
            "|",
            "link",
            "imageUpload",
            "blockQuote",
            "insertTable",
            "|",
            "findAndReplace",
            "undo",
            "redo",
        ],
    },
    language: "ko",
    table: {
        contentToolbar: [
            "tableColumn",
            "tableRow",
            "mergeTableCells",
            "tableCellProperties",
        ],
    },
};

export default TAMSEditor;
