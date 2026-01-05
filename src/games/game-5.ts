import { Adventurer } from "../models/Adventurer";
import { Monster } from "../models/Monster";
import { HealPotion } from "../models/HealPotion";

// 1. Create typed instances
const hero: Adventurer = new Adventurer("TypeScript Warrior", 100);
const enemy: Monster = new Monster("Bugbear", 80, 15);
const potion: HealPotion = new HealPotion("Syntax Elixir", 20, 2);

// 2. The Battle Loop
console.log("--- BATTLE START ---");

// Monster attacks hero
enemy.attack(hero);

// Hero uses potion
potion.use(hero);

console.log("\n--- BATTLE STATUS ---");
console.log(`Hero Health: ${hero.health}`);
console.log(`Enemy Health: ${enemy.health}`);
console.log(`Potion Charges Left: ${potion.charges}`);
