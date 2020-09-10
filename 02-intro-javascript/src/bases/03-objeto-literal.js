const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 345234,
        lat: 14.234234,
        lng: 34.345435
    }
};

console.log(persona);
//console.table(persona);

const persona2 = {...persona};

persona2.nombre = 'Peter'

console.log(persona)
console.log(persona2)
