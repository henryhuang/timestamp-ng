var pkg = require('../../package.json')
var version = pkg.version

module.exports = require('yargs')
    .usage('Usage: $0 [options]')
    .options({
        'd': {
            alias: 'date_string',
            describe: 'the date string'
        },
        'f': {
            alias: 'format',
            describe: 'the date string format, defined see http://momentjs.com/docs/#/parsing/string-format/'
        },
        's': {
            alias: 'show_date_string',
            describe: 'show date string',
            default: false
        }
    })
    .example('$0')
    .example('$0 -d 20161121')
    .example('$0 -d 2016-11-21 -f YYYY-MM-DD')
    .help('h')
    .alias('h', 'help')
    .version(version)
    .alias('v', 'version')