import Adventurer from "../models/Adventurer.js";
console.log("Fantasy Forge initialized!");
const hero1 = new Adventurer("Robin", 80);
const hero2 = new Adventurer("Lurona", 60);
//robin//
hero1.receiveDamage(20);
hero1.heal(15);
//Lurona//
hero2.receiveDamage(10);
hero2.heal(25);
//adventurer health record//
console.log(`${hero1.name}'s final health: ${hero1.health}`);
console.log(`${hero2.name}'s final health: ${hero2.health}`);
console.log(" First Adventurer person");
hero1.scout();
