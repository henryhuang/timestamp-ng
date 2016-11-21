"use strict"

let moment = require('moment');

const reg = /([0-9]{4})([0-9]{2})([0-9]{2})([0-9]{0,2})([0-9]{0,2})([0-9]{0,2})/;

let getDate = (date_string, format) => {
    if (format) {
    	return moment(date_string, format).toDate();
    } else {
        reg.test(date_string);
        let [year = 0, month = 1, day = 0, hour = 0, minute = 0, second = 0] = [RegExp.$1, RegExp.$2, RegExp.$3, RegExp.$4, RegExp.$5, RegExp.$6];
        return new Date(year, month - 1, day, hour, minute, second);
    }
}

let tsng = (options, callback) => {

    let date;
    if (options.date_string) {
        date = getDate(options.date_string, options.format);
    } else {
        date = new Date();
    }

    let ts = date.getTime();
    if (options.show_date_string) {
        ts = date + ': ' + ts;
    }
    return ts;

}

module.exports = tsng;
