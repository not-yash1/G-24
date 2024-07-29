
// 1. Importing the fs module :
const fs = require('fs');


// 2. Reading a file :
    // 2.1 Asynchronously reading a file :
    fs.readFile(path, options, callback)

    // Example usage:
    fs.readFile('example.txt', 'utf-8', (err, data) => {
        if (err) {
          console.error('Error reading file:', err);
          return;
        }
        console.log('File contents:', data);
    });

    // 2.2 Synchronously reading a file :
    fs.readFileSync(path, options)

    // Example usage:
    try {
        const data = fs.readFileSync('example.txt', 'utf8');
        console.log('File contents:', data);
    } catch (err) {
        console.error('Error reading file:', err);
    }
      

// 3. Writing a file :
    // 3.1 Asynchronously writing a file :
    fs.writeFile(path, data, options, callback)

    // Example usage:
    fs.writeFile('example.txt', 'Hello, World!', err => {
        if (err) {
          console.error('Error writing file:', err);
          return;
        }
        console.log('File written successfully');
    });

    // 3.2 Synchronously writing a file :
    fs.writeFileSync(path, data, options)

    // Example usage:
    try {
        fs.writeFileSync('example.txt', 'Hello, World!');
        console.log('File written successfully');
    } catch (err) {
        console.error('Error writing file:', err);
    }


// 4. Appending to files :
    // 4.1 Asynchronously appending to files :
    fs.appendFile(path, data, options, callback)

    // Example usage:
    fs.appendFile('example.txt', 'Hello, World!', err => {
        if (err) {
          console.error('Error appending to file:', err);
          return;
        }
        console.log('File appended successfully');
    });

    // 4.2 Synchronously appending to files :
    fs.appendFileSync(path, data, options)

    // Example usage:
    try {
        fs.appendFileSync('example.txt', 'Hello, World!');
        console.log('File appended successfully');
    } catch (err) {
        console.error('Error appending to file:', err);
    }
      

// 5. Deleting files :
    // 5.1 Asynchronously deleting files :
    fs.unlink(path, callback)

    // Example usage:
    fs.unlink('example.txt', err => {
        if (err) {
          console.error('Error deleting file:', err);
          return;
        }
        console.log('File deleted successfully');
    });

    // 5.2 Synchronously deleting files :
    fs.unlinkSync(path)

    // Example usage:
    try {
        fs.unlinkSync('example.txt');
        console.log('File deleted successfully');
    } catch (err) {
        console.error('Error deleting file:', err);
    }


// 6. Working with directories :
    // 6.1 Asynchronously creating directories :
    fs.mkdir(path, options, callback)

    // Example usage:
    fs.mkdir('example', err => {
        if (err) {
          console.error('Error creating directory:', err);
          return;
        }
        console.log('Directory created successfully');
    });

    // 6.2 Synchronously creating directories :
    fs.mkdirSync(path, options)

    // Example usage:
    try {
        fs.mkdirSync('example');
        console.log('Directory created successfully');
    } catch (err) {
        console.error('Error creating directory:', err);
    }



// 7. Reading directories :
    // 7.1 Asynchronously reading directories :
    fs.readdir(path, options, callback)

    // Example usage:
    fs.readdir('example', (err, files) => {
        if (err) {
          console.error('Error reading directory:', err);
          return;
        }
        console.log('Files in directory:', files);
    });

    // 7.2 Synchronously reading directories :
    fs.readdirSync(path)

    // Example usage:
    try {
        const files = fs.readdirSync('example');
        console.log('Files in directory:', files);
    } catch (err) {
        console.error('Error reading directory:', err);
    }


// 8. Watching files & directories :
    fs.watch(path, options, callback)

    // Example usage:
    fs.watch('example.txt', (eventType, filename) => {
        console.log(`File ${filename} was ${eventType}!`);
    });


// 9. File Streams :
    // 9.1 Creating a read stream :
    const readStream = fs.createReadStream('example.txt', 'utf8');

    readStream.on('data', chunk => {
    console.log('Data chunk:', chunk);
    });

    readStream.on('end', () => {
    console.log('No more data');
    });

    // 9.2 Creating a write stream :
    const writeStream = fs.createWriteStream('example.txt', 'utf8');

    writeStream.write('Hello, ');
    writeStream.write('World!');
    writeStream.end();

    writeStream.on('finish', () => {
        console.log('Write complete');
    });


// 10. File Metadata :
    // 10.1 Asynchronously getting file metadata :
    fs.stat(path, options, callback)

    // Example usage:
    fs.stat('example.txt', (err, stats) => {
        if (err) {
          console.error('Error getting file stats:', err);
          return;
        }
        console.log('File stats:', stats);
    });

    // 10.2 Synchronously getting file metadata :
    fs.statSync(path)

    // Example usage:
    try {
        const stats = fs.statSync('example.txt');
        console.log('File stats:', stats);
    } catch (err) {
        console.error('Error getting file stats:', err);
    }


// 11. File Permissions :
    // 11.1 Asynchronously changing file permissions :
    fs.chmod(path, mode, callback)

    // Example usage:
    fs.chmod('example.txt', 0o755, err => {
        if (err) {
          console.error('Error changing file permissions:', err);
          return;
        }
        console.log('File permissions changed successfully');
    });

    // 11.2 Synchronously changing file permissions :
    fs.chmodSync(path, mode)

    // Example usage:
    try {
        fs.chmodSync('example.txt', 0o755);
        console.log('File permissions changed successfully');
    } catch (err) {
        console.error('Error changing file permissions:', err);
    }

