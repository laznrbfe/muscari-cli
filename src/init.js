// init.js
import { join, basename } from 'path';
import vfs from 'vinyl-fs';
import { renameSync } from 'fs';
import through from 'through2';
import { sync as emptyDir } from 'empty-dir';
import leftPad from 'left-pad';
import chalk from 'chalk';

function info(type, message) {
  console.log(`${chalk.green.bold(leftPad(type, 12))}  ${message}`);
}

function error(message) {
  console.error(chalk.red(message));
}

function success(message) {
  console.error(chalk.green(message));
}

function init({ install }) {
  const cwd = join(__dirname, '../boilerplates', '/muscari');
  const dest = process.cwd();
  const projectName = basename(dest);
  console.log(`Path: ${chalk.green(dest)}`);
}

export default init;
