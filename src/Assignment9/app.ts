import * as fs from 'fs/promises';
import * as readline from 'readline';
import filesystem from 'fs';
import { exec } from 'child_process';


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function createDirectories(parentDir: string, depth: number): Promise<void> {
  if (depth <= 0) {
    return; 
  }

  const dirName = await promptUser(`Enter the name for directory ${parentDir}: `);
  const newDir = `${parentDir}/${dirName}`;

  try {
    
    const stats = await fs.stat(newDir);
    if (stats.isDirectory()) {
      throw new Error(`Directory '${newDir}' already exists.`);
    }
  } catch (error) {
   
    await fs.mkdir(newDir);
  }

  
  await createDirectories(newDir, depth - 1);
}


function promptUser(question: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function copyFileContents(sourceFile: string, destinationFile: string) {
    try {
      
      const fileContents = await fs.readFile(sourceFile, 'utf-8');
  
     
      await fs.writeFile(destinationFile, fileContents);
  
      console.log(`Contents copied from '${sourceFile}' to '${destinationFile}' successfully!`);
    } catch (error :any) {
      console.error(`An error occurred: ${error.message}`);
    }
  }

  async function processChunk(chunk: any) {
    return new Promise((resolve) => {
      setTimeout((answer: any) => {
        console.log(`Processed ${chunk.length} bytes`);
        resolve(answer);
      }, 100);
    });
  }

  async function processLargeFile(inputFile: string, outputFile: string) {
    
    const readStream = filesystem.createReadStream(inputFile, { highWaterMark: 1024 }); 
    const writeStream = filesystem.createWriteStream(outputFile);
  
    let totalBytesRead = 0;
  

    readStream.on('data', (chunk: any ) => {
      totalBytesRead += chunk.length;
      console.log(`Read ${totalBytesRead} bytes`);
    });
  

    for await (const chunk of readStream) {
      await processChunk(chunk);
      await writeStream.write(chunk);
    }
  
 
    console.log('File processing completed!');
    writeStream.end();
  }

  function imageToBase64(filePath: string) {
    return new Promise((resolve, reject) => {
        filesystem.readFile(filePath, (err, data) => {
        if (err) {
          reject(err);
          return;
        }
  
        const base64String = Buffer.from(data).toString('base64');
        resolve(base64String);
      });
    });
  }
  

  function executeCommand(command: string) {
    return new Promise((resolve, reject) => {
      exec(command, (error, stdout, stderr) => {
        if (error) {
          reject(error);
          return;
        }
  
        resolve({ stdout , stderr });
      });
    });
  }
  


  async function mainTask1(): Promise<void> {
  
    const rootDir = await promptUser('Enter the name for the root directory: ');

    const rootStats = await fs.stat(rootDir);
    if (rootStats.isDirectory()) {
      throw new Error(`Directory '${rootDir}' already exists.`);
    }

    const numNestedDirs = parseInt(await promptUser('Enter the number of nested directories to create: '), 10);

    await fs.mkdir(rootDir);

    await createDirectories(rootDir, numNestedDirs);

    console.log('Directory structure created successfully!');
  } 

  async function mainTask2() {
    try {
      const sourceFile = await promptUser('Enter the name of the source file: ');
      const destinationFile = await promptUser('Enter the name of the destination file: ');
  
      await copyFileContents(sourceFile, destinationFile);
    } finally {
      rl.close();
    }
  }

  async function mainTask3() {
    try {
        const inputFile = await promptUser('Enter the name of the input file: ');
        const outputFile = await promptUser('Enter the name of the output file: ');
    
        
        await processLargeFile(inputFile, outputFile);
      } finally {
        rl.close();
      }
  }

  async function mainTask4() {
      const imagePath = "/Users/muhammadahmed/Documents/nodeJsTraining/image.png"  ; // Replace with the path to your image file
      const base64String = await imageToBase64(imagePath);
  
      console.log('Base64-encoded image:', base64String);
  }

  async function mainTask5() {
    try {
      const userCommand = await promptUser('Enter the command to execute: ');
  
      const result = await executeCommand(userCommand);
  
      console.log('Command executed successfully:');
      console.log(result);
    } catch (error: any) {
      console.error(`An error occurred: ${error.message}`);
    } finally {
      rl.close();
    }
  }

  
  

// mainTask1();
// mainTask2();
// mainTask3();
// mainTask4();
mainTask5();
