import Datepicker from "vanillajs-datepicker/js/Datepicker.js";
import DateRangePicker from "vanillajs-datepicker/js/DateRangePicker.js";
import ko from "vanillajs-datepicker/js/i18n/locales/ko.js";

const inputHandler = (e) => {
    const val = e.target.value.replace(/\D/g, "");
    const { length } = val;

    let result = "";

    if (length < 6) {
        result = val;
    } else if (length < 8) {
        result += val.substring(0, 4);
        result += "-";
        result += val.substring(4);
    } else {
        result += val.substring(0, 4);
        result += "-";
        result += val.substring(4, 6);
        result += "-";
        result += val.substring(6);
    }

    e.target.value = result;
};

const datepickerInit = () => {
    ko.ko.titleFormat = "y년 mm월";
    Object.assign(Datepicker.locales, ko);
    const elements = [...document.querySelectorAll(".range-picker")];
    elements.forEach((el) => {
        el.instance = new DateRangePicker(el, {
            buttonClass: "btn",
            language: "ko",
            nextArrow: `<i class="bi bi-chevron-right"></i>`,
            prevArrow: `<i class="bi bi-chevron-left"></i>`,
        });
        el.instance.inputs.forEach((el) =>
            el.addEventListener("input", inputHandler)
        );
    });
};

export default datepickerInit;
