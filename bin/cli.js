"use strict"

let extend = require('deep-extend')
let chalk = require('chalk');
let yargs = require('./lib/yargs');
let defaults = require('./lib/defaults');
let tsng = require('../');

let options = {};

extend(options, defaults(), yargs.argv);

try {
    console.log(tsng(options));
} catch (err) {
	handleError(err);
}

function handleError (err) {
  let msg = err.msg || err;
  console.log(chalk.red('Error: ', msg));
  yargs.showHelp()
  process.exit(1)
}
