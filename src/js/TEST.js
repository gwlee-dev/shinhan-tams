const callAPI = async () => {
    const res = await fetch("/testoneqmc/listScripts.json", { method: "POST" });
    const json = await res.json();
    console.log(json);
    return json;
};

const data = callAPI();

const config = {
    title: "스크립트 목록",
    source: data.result.scriptList,
    target: {
        num: "번호",
        system_label: "시스템",
        job_label: "업무",
        name: "파일명",
        notes: "설명",
        type_label: "종류",
        file_size2: "크기",
        authorName: "등록자",
        creation_dt: "등록일",
    },
    // templateUrl: "/up_/assets/template.xlsx",
};

document
    .querySelector("#excel-btn")
    .addEventListener("click", () => window.makeExcel(config));

document.querySelector("#excel-json").innerHTML = JSON.stringify(config);
