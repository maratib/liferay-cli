
import clear from 'clear';
import chalk from 'chalk';
import figlet from 'figlet';
// import path from 'path';
// import program from 'commander';

export function banner(version: string = '0.0.0') {
    clear();

    console.log(
        chalk.red(
            figlet.textSync('my-cli', { horizontalLayout: 'full' })
        )
    );
    // console.log(chalk.green(`Version : ${version}`))
}


export const doPeppers = () => {
    console.log('  - peppers')
}
export const doPineapple = () => {
    console.log('  - pineapple')
}

export const doBBQ = () => {
    console.log('  - BBQ')
}



export function addition(a: number, b: number): number {
    return a + b;
}