import moment from "moment";
const defaultFormat = "YYYY-MM-DD hh:mm:ss";
export default () => {
    let date = new Date();
    return {
        date_string: moment().format(defaultFormat),
        format: defaultFormat,
        show_date_string: false
    };
};
//# sourceMappingURL=defaults.js.map