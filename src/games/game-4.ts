import  { Adventurer } from "../models/Adventurer.ts";
import { Monster } from "../models/Monster.ts";

const hero = new Adventurer("Sir Brave", 100);
const goblin = new Monster("Goblin Grunt", 60, 15);

console.log("--- A Monster Appears! ---");

// Monster introduction
goblin.roar();

// Monster attacks hero
console.log("\n--- The Battle Begins ---");
goblin.attack(hero);

// Hero fights back
hero.attack(goblin);

console.log("\n--- Battle Status ---");
console.log(`${hero.name} Health: ${hero.health}`);
console.log(`${goblin.name} Health: ${goblin.health}`);
