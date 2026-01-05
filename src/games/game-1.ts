import Adventurer from "../models/Adventurer.ts";
console.log("Fantasy Forge initialized!");
const hero1 = new Adventurer("Robin", 80);
const hero2 = new Adventurer("Lurona", 60);
//robin//
hero1.takeDamage(20);
hero1.heal(15);
//Lurona//
hero2.takeDamage(10);
hero2.heal(25);
//adventurer health record//
console.log(`${hero1.name}'s final health: ${hero1.health}`);
console.log(`${hero2.name}'s final health: ${hero2.health}`);
console.log(" First Adventurer person");
hero1.scout();
