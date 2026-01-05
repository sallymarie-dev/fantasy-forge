import { Adventurer } from "../models/Adventurer";
import { Monster } from "../models/Monster";
import { HealPotion } from "../models/HealPotion";
import { Shield } from "../models/Shield";
import { Blacksmith } from "../models/Blacksmith";

const hero: Adventurer = new Adventurer("TypeScript Warrior", 100, 50);
const enemy: Monster = new Monster("Bugbear", 80, 15);
const potion: HealPotion = new HealPotion("Syntax Elixir", 20, 2);
const shield: Shield = new Shield("Heroic Shield", 30);
const smith: Blacksmith = new Blacksmith("Gorim", 20);

console.log("--- BATTLE START ---");

// Monster attacks hero
enemy.attack(hero);

// Hero uses potion
potion.use(hero);


console.log(`\n--- Oh no! ${shield.name} was damaged in the fight ---`);
shield.durability -= 15;
console.log(`${shield.name} durability is now ${shield.durability}`);

console.log("\n--- Hero goes to the Blacksmith ---");
smith.hammerAndAnvil(hero, shield);


console.log("\n--- Hero retaliates ---");
hero.attack(enemy);

console.log("\n--- BATTLE STATUS ---");
console.log(`${hero.name} Health: ${hero.health}`);
console.log(`${enemy.name} Health: ${enemy.health}`);
console.log(`${hero.name} Gold: ${hero.gold}`);
console.log(`${shield.name} Durability: ${shield.durability}`);
console.log(`${potion.name} Charges Left: ${potion.charges}`);
