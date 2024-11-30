#!/usr/bin/env node
import { version } from '../package.json';
import { program } from "commander";
import { banner, doBBQ, doPeppers, doPineapple } from "./commands";
import chalk from 'chalk';

banner();

// console.log(process.argv);

program
    .version(chalk.green(`\n Version : ${version} \n`))
    .description("An example CLI")
    .option('-p, --peppers', 'Add peppers')
    .option('-P, --pineapple', 'Add pineapple')
    .option('-b, --bbq', 'Add bbq sauce')
    .option('-c, --cheese <type>', 'Add the specified type of cheese [marble]')
    .option('-C, --no-cheese', 'You do not want any cheese')
    .parse(process.argv);

const options = program.opts();

console.log('\n');
if (options.peppers) doPeppers();
if (options.pineapple) doPineapple();
if (options.bbq) doBBQ();




// const cheese: string = undefined === options.cheese
//     ? 'marble'
//     : options.cheese || 'no';

// console.log('  - %s cheese', cheese);

if (!process.argv.slice(2).length) {
    program.outputHelp();
}