import readline from 'readline';
import os from 'os';
import { getPath } from "./utils/pathSolver.js";


const { __filename, __dirname } = getPath(import.meta.url);
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '>>> '
});

try {
  process.chdir(os.homedir());
  console.log(`Change directory to ${process.cwd()}`);
} catch (err) {
  console.error(`Error changing directory:`, err);
}

rl.prompt()

rl.on('line', (input) => {
  const [cmd, args] = input.trim().split(' ');
  switch (cmd) {
    case 'up':
      if (process.cwd() !== os.homedir()) {
        process.chdir('..');
        console.log(`Change directory to ${process.cwd()}`);
      }
      break;
    case 'cd':
      const inputPath = path.join(process.cwd(), args);
      console.log(inputPath);
      try {
        process.chdir(inputPath);
        console.log(`Change directory to ${process.cwd()}`);
      } catch (err) {

      }
    case 'cp':
      console.log('Copy file');
      break;
    case 'cat':
      console.log('Read file');
      break;
    case '.exit':
      rl.close();
    default:
      console.log('Incorrect input');
  }
  rl.prompt()
}).on('close', () => {
  console.log('Thank you for using File Manager, Username, goodbye!');
  process.exit(0);
})