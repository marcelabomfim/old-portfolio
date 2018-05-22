#!/usr/bin/env node
/* eslint no-console: 0 */

const program = require('commander');

const createComponent = require('./createComponent');

function parseVal(val) {
  return val.split(',');
}

function log(type, name) {
  console.log(`you will create ${type} ${name}`);
}

(function() {
  /* eslint func-names: 0 */

  program
    .version('1.0.0')
    .option('-c, --component [name]', 'Create Component', parseVal)
    .parse(process.argv);

  if (program.component) {
    log('component', program.component);
    createComponent(program.component);
  }
})();
