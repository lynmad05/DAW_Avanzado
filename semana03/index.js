//actividad 04
const fs = require('fs');

const readable = fs.createReadStream('datos.txt');
const writable = fs.createWriteStream('destino.txt');

readable.pipe(writable);

readable.on('error', err => console.error(err));
writable.on('error', err => console.error(err));

