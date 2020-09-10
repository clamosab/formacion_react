const saludar = function (nombre) {
    return `Hola, ${nombre}`;
}


const saludar2 = (nombre) => `Hola, ${nombre}`;

const saludar3 = () => `Hola Mundo`; 


console.log(saludar('Goku'));
console.log(saludar2('Vegeta'));
console.log(saludar3());


const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'Elsdf'
    }
}

console.log(getUser());


const getUser2 = () => ({
        uid: 'ABC123',
        username: 'Elsdf'
    })

const user = getUser2();
console.log(user);


function getUsuarioActivo(nombre) {
    return {
        uid: 'ABC567',
        username: nombre
    }
}

const usuarioActivo = getUsuarioActivo('Carlos');

console.log(usuarioActivo);

const getUsuarioActivo2 = (nombre) => ({
    uid: 'ABC567',
    username: nombre
});

console.log(getUsuarioActivo2('Test'));