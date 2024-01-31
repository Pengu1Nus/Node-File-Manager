import readline from 'readline';
import os from 'os';
import { changeDirectory, upToDirectory } from './nwd/navigation.js';
import { cat } from './fs/readFile.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '>>> ',
});

try {
  process.chdir(os.homedir());
  console.log(`Change directory to ${process.cwd()}`);
} catch (err) {
  console.error(`Error changing directory:`, err);
}

rl.prompt();

rl.on('line', (input) => {
  const [cmd, ...args] = input.trim().split(' ');
  switch (cmd) {
    case 'up':
      upToDirectory();
      break;
    case 'cd':
      changeDirectory(args);
      break;
    case 'cp':
      console.log(`You are currently in ${process.cwd()}`);
      break;
    case 'cat':
      console.log(`You are currently in ${process.cwd()}`);
      cat(args[0]);
      break;
    case '.exit':
      rl.close();
    default:
      console.log('Incorrect input');
  }
  rl.prompt();
}).on('close', () => {
  console.log('Thank you for using File Manager, Username, goodbye!');
  process.exit(0);
});
