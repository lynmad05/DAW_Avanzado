const http = require("http");
http.createServer((req,res)=>{
    res.write("Hola estudiantes de Desarrollo Web Avanzado");
    res.end();
}).listen(3000);
console.log("Servidor corriendo en puerto 3000");
