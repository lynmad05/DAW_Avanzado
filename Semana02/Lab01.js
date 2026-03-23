const https = require('https');
const path = require('path');

const options = {
    hostname: 'jsonplaceholder.typicode.com',
    path: '/posts',
    method: 'GET'
}

const req = https.request(options, res => {
    let data = '';

    //recibir los fragmentos de datos
    res.on('data', chunk => {
        data += chunk;
    });

    //cuando se complete la recepción de datos
    res.on('end', () => {
        console.log(JSON.parse(data));
    });
});

req.on('error', (error) => {
    console.error('error en la solicitud: ${error.message}');
});

req.end();