const fs = require('fs');

// Read the file in the directory
// fs.readFile('./node/learn.txt', (err, data) => {
//     if(err)
//     {
//         console.log(err);
//     }
//     console.log(data.toString());
// } );


// Write the file in the directory
// fs.writeFile('./node/learn.txt', 'Welcome to Node.js', () => {
//     console.log("File written successfully");
// })


// Create the directory in the files

// if(!fs.existsSync('./javascript')) {
//     fs.mkdir('./javascript', (err) => {
//         if(err)
//         {
//             console.log(err);
//         }
//         console.log("Directory created successfully");
//     })
// }
// else
// {
//      fs.rmdir('./javascript', (err) => {
//         if(err)
//         {
//             console.log(err);
//         }
//         console.log("DIrectory deleted successfully");
//      })
// }

// Delete the files in the directory


if(fs.existsSync('./node/learn.txt')) {
    fs.unlink('./node/learn.txt', (err) => {
        if(err)
        {
            console.log(err);
        }
        console.log("FIle deleted successfully");
    })
}
else
{
    console.log("File doesn't found");
}