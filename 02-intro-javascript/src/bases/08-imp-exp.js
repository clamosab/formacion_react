// import {heroes} from './data/heroes'
// import {heroes} from './data/heroes'
// const { heroes } = require("./data/heroes")

// const { default: heroes, owners } = require("./data/heroes");
// import heroes, {owners} from "./data/heroes";
// import {heroes, owners} from "./data/heroes";
// import heroes, {owners} from "../data/heroes";
import heroes from "../data/heroes";

// console.log(owners);


export const getHeroeById = (id) => heroes.find(heroe => heroe.id === id);


// console.log(getHeroeById(3));

export const getHeroeByOwner = (owner) => heroes.filter(heroe => heroe.owner === owner);

// console.log(getHeroeByOwner('Marvel'));