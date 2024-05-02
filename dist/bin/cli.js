#!/usr/bin/env node
import extend from "deep-extend";
import chalk from "chalk";
import defaults from "./lib/defaults.js";
import useYargs from "./lib/useYargs.js";
import tsng from "../index.js";
const options = {};
extend(options, defaults(), useYargs.argv);
try {
    console.log(tsng(options));
}
catch (err) {
    handleError(err);
}
function handleError(err) {
    let msg = err.message || err;
    console.log(chalk.red('Error: ', msg));
    useYargs.showHelp();
    process.exit(1);
}
//# sourceMappingURL=cli.js.map