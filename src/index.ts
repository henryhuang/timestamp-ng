import moment from "moment";
import { Options } from "yargs";

const reg = /([0-9]{4})([0-9]{2})([0-9]{2})([0-9]{0,2})([0-9]{0,2})([0-9]{0,2})/;

const getDate = (dateString: string, format: string) => {
    if (format) {
    	return moment(dateString, format).toDate();
    } else {
        reg.test(dateString);
        const [year = 0, month = 1, day = 0, hour = 0, minute = 0, second = 0] = [RegExp.$1, RegExp.$2, RegExp.$3, RegExp.$4, RegExp.$5, RegExp.$6];
        return new Date(Number(year), Number(month) - 1, Number(day), Number(hour), Number(minute), Number(minute));
    }
}

const tsng = (options: Options) => {

    let date: Date;
    // @ts-ignore
    if (options.date_string) {
        // @ts-ignore
        date = getDate(options.date_string, options.format);
    } else {
        date = new Date();
    }

    let ts = date.getTime().toString();
    // @ts-ignore
    if (options.show_date_string) {
        ts = `${date}: ${ts}`;
    }
    return ts;

}

export default tsng;