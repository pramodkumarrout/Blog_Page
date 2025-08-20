const fs = require('fs');
const { clearScreenDown } = require('readline');


// reading files in Node.js
// fs.readFile('./docs/blog.txt', (err,data) => {
//     if(err) {
//         console.log(err);
//     }
//     else
//     {
//         console.log(data.toString());
//     }
// });

// console.log('last line');
 

// writing files in Node.js

// fs.writeFile('./docs/blog.txt', 'Welcome to javascript', () => {
//     console.log("File was written succcessfully");
// })

// // create new txt file which is not exist
// fs.writeFile('./docs/blog1.txt', 'Welcome to Node.js', () => {
//     console.log("File was written successfully");
// })



// directores or create a folder 

// if(!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err) => {
//         if(err)
//         {
//             console.log(err);
//         }
//         console.log("Folder created Successfully");
//     });
// }
// else 
// {
//     fs.rmdir('./assets', (err) => {
//         if(err) 
//         {
//             console.log(err);
//         }
//         console.log("Folder deleted Successfully");
//     })
// }






// deleting file
if(fs.existsSync('./docs/delete.txt')) {
    fs.unlink('./docs/delete.txt', (err) => {
    if(err)
    {
        console.log(err);
    }
    console.log("File deleted successfully");
    })
}
else
{
    console.log("File doesn't found in directory");
}


