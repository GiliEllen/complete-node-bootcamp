const fs = require('fs');
const http = require('http');

////////////////////////////////
// Files

// const { text } = require('stream/consumers');

// //Blocking, synchronous way
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn);

// const textOut = `this is what we know about avacado: ${textIn}.\ncreated on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('file written');

//Blocking, asynchronous way

// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//     if (err) return console.log('Error! 💣')
// 	fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
// 		console.log(data2);
// 		fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
// 			console.log(data3);

// 			fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', (err) => {
// 				console.log('Your File Has Been Written! 😊');
// 			});
// 		});
// 	});
// });

// console.log('Will Read File!');

///////////////////////////////////

// SERVER

http.createServer((req, res) => {
    res.end('Hello from the server!')
})