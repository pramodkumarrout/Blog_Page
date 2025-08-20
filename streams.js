
// create a streams to read large ammount of datas

const fs = require('fs');



// const readStream = fs.createReadStream('./docs/large.txt', {encoding: 'utf8'});

// read a stream
// const readStream = fs.createReadStream('./docs/large.txt');
// // write a stream
// const  writeStream = fs.createWriteStream('./docs/small.txt');
// read a stream
// readStream.on('data', (chunk) => {
//     console.log("---Stream Started----");
//     console.log(chunk.toString());

// // write a stream
// writeStream.write('\nNew Chunk\n');
// writeStream.write(chunk.toString());
// })


                //   OR 


const readStream = fs.createReadStream('./docs/large.txt');
const writeStream = fs.createWriteStream('./docs/small.txt');


// using pipe method to use read and write stream

readStream.pipe(writeStream);