import { easepick } from "@easepick/core";
import { RangePlugin } from "@easepick/range-plugin";
import { AmpPlugin } from "@easepick/amp-plugin";
import easepickCss from "bundle-text:@easepick/bundle/dist/index.css";
import { PresetPlugin } from "@easepick/bundle";

const range = document.querySelectorAll(".date-range-wrap");
const rangeButton = document.querySelectorAll(".range-button");
const datepicker = document.querySelectorAll(".datepicker");

const pickerOption = {
    css: easepickCss + `.month-name--select:last-child{order:-1};`,
    zIndex: 10,
    AmpPlugin: {
        dropdown: {
            months: true,
            years: true,
        },
    },
    PresetPlugin: {
        position: "bottom",
        customLabels: ["오늘", "어제", "1주일", "30일", "이번달", "저번달"],
    },
    lang: "ko-KR",
};

[...range].forEach(
    (x) =>
        new easepick.create({
            element: x.querySelector(".start-date"),
            RangePlugin: {
                elementEnd: x.querySelector(".end-date"),
                strict: false,
                locale: {
                    other: "일",
                },
            },
            plugins: [AmpPlugin, PresetPlugin, RangePlugin],
            ...pickerOption,
        })
);

[...datepicker].forEach(
    (element) =>
        new easepick.create({
            element,
            plugins: [AmpPlugin, PresetPlugin],
            ...pickerOption,
        })
);

[...rangeButton].forEach((x) => {
    const real = {
        start: x.parentNode.querySelector(".start-date"),
        end: x.parentNode.querySelector(".end-date"),
    };
    const fake = {
        start: x.querySelector(".start-display"),
        end: x.querySelector(".end-display"),
    };
    real.start.addEventListener("input", () => {
        console.log("hi");
        fake.start.innerHTML = real.start.value;
    });
    real.end.addEventListener("input", () => {
        fake.end.innerHTML = real.end.value;
    });
    x.addEventListener("click", () => real.start.click());
});
