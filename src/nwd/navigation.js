import fs from 'fs/promises';
import os from 'os';
import path from 'path';

export const changeDirectory = async (args) => {
  const newPath = path.join(process.cwd(), ...args);
  try {
    const pathInfo = await fs.stat(newPath);
    if (pathInfo.isDirectory()) {
      process.chdir(newPath);
      console.log(`You are currently in ${process.cwd()}`);
    } else {
      console.log(`${newPath} is not a directory`);
    }
  } catch (err) {
    console.error(`Error changing directory: ${err}`);
  }
};

export const upToDirectory = async () => {
  if (process.cwd() !== os.homedir()) {
    process.chdir('..');
    console.log(`You are currently in ${process.cwd()}`);
  }
};
