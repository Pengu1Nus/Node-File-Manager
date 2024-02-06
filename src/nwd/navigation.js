import fs from 'fs/promises';
import os from 'os';
import path from 'path';

export const changeDirectory = async (args) => {
  const newPath = path.join(...args);
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

export const listFilesAndFolders = async (path) => {
  const filesAndDirs = await fs.readdir(path, { withFileTypes: true });

  let data = filesAndDirs.map((elem) => {
    return {
      Name: elem.name,
      Type: elem.isDirectory() ? 'directory' : 'file',
    };
  });

  data.sort((a, b) => {
    if (a.Type === b.Type) {
      return a.Name.localeCompare(b.Name);
    }
    return a.Type === 'directory' ? -1 : 1;
  });
  return data;
};
