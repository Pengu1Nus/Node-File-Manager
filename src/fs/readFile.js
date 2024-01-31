import fs from 'fs';

export const cat = async (filePath) => {
  const readStream = fs.createReadStream(filePath, 'utf8');

  readStream.on('data', (chunk) => {
    process.stdout.write(`${chunk}`);
  });
  readStream.on('end', () => {
    process.stdout.write(`\nYou are currently in ${process.cwd()}\n`);
  });

  readStream.on('error', (err) => {
    console.error(`Error ${filePath}:`, err);
  });
};
