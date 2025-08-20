// Modules and Require 

// import people.js file in here 

// const xyz = require('./people.js');

// console.log(xyz.people, xyz.ages);

const {people, ages} = require('./people.js');

console.log(people,ages);


const os = require('os');

console.log(os.platform(), os.homedir());