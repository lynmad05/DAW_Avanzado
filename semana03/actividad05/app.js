const axios = require('axios');

async function obtenerUsuarios() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');

        const usuarios = response.data;

        const usuariosFiltrados = usuarios.filter(user => user.address.city === "South Christy");

        console.log("Usuarios filtrados:");
        console.log(usuariosFiltrados);

    } catch (error) {
        console.error(error.message);
    }
}

obtenerUsuarios();
