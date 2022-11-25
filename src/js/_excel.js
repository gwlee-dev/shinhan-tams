import * as XLSX from "xlsx/xlsx.mjs";

// const getTemplate = async (url) => {
//     try {
//         const res = await fetch(url);
//         const buffer = await res.arrayBuffer();
//         return buffer;
//     } catch {
//         console.error("error occurred on get excel template.");
//     }
// };

const makeExcel = ({ title, source, target, templateUrl }) => {
    const data = {
        isObject: typeof source === "object",
        isElement: source?.constructor.name === "HTMLTableElement",
    };

    // if (templateUrl) {
    //     console.log(":-)");
    //     data.template = await getTemplate(templateUrl);
    //     data.book = XLSX.read(new Uint8Array(data.template), {
    //         type: "array",
    //     });
    //     console.log(data.book);
    //     // data.book.SheetNames.forEach((sheet) => {
    //     //     XLSX.utils
    //     //         .sheet_to_row_object_array(data.book.Sheets[sheet])
    //     //         .forEach((obj) => {
    //     //             console.log(obj.Link, obj.Name);
    //     //         });
    //     // });
    // } else {
    data.book = XLSX.utils.book_new();
    // }

    data.book.SheetNames.push(title);

    if (data.isObject) {
        source.forEach((row) => {
            Object.keys(row)
                .filter((key) => !Object.keys(target).includes(key))
                .forEach((key) => delete row[key]);
        });
        const doc = [target, ...source];
        const params = { skipHeader: true };
        data.book.Sheets[title] = XLSX.utils.json_to_sheet(doc, params);
    }

    if (data.isElement) {
        //
    }

    XLSX.writeFile(data.book, `${title}.xlsx`);
};

export default makeExcel;
