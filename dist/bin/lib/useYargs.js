import _yargs from "yargs";
import { hideBin } from "yargs/helpers";
const yargs = _yargs(hideBin(process.argv));
const config = {
    appName: "tsn",
    version: "2.0.1"
};
export default yargs
    .scriptName(config.appName)
    .usage("Usage: $0 [options]")
    .options({
    "d": {
        alias: "date_string",
        describe: "the date string"
    },
    "f": {
        alias: "format",
        describe: "the date string format, defined see http://momentjs.com/docs/#/parsing/string-format/"
    },
    "s": {
        alias: "show_date_string",
        describe: "show date string",
        default: false
    }
})
    .example("$0", "default usage")
    .example("$0 -d 20161121", "parse date string with DEFAULT parttern to long value")
    .example("$0 -d 2016-11-21 -f YYYY-MM-DD", "parse date string with SPECIFIC parttern to long value")
    .help("h")
    .alias("h", "help")
    .version(config.version)
    .alias("v", "version");
//# sourceMappingURL=useYargs.js.map