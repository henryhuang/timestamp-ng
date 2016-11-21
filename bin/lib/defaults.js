'use strict';

module.exports = () => {
    let date = new Date();
    return {
        date_string: date.getFullYear() + '' + (date.getMonth() + 1) + date.getDate() + date.getHours() + date.getMinutes() + date.getSeconds(),
        format: '',
        show_date_string: false
    }
};