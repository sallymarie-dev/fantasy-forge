import  { Adventurer } from "../models/Adventurer.ts";
import { HealPotion} from "../models/HealPotion.ts";
import { MagicItem } from "../models/MagicItem.ts";

console.log("Game 2 initialized!");

// Creating new adventurer
const hero = new Adventurer("Nolora", 50);

// Creating potion
const potion = new HealPotion("Minor Heal Potion", 30, 2);
const invisibilityCloak = new MagicItem(
  "Invisibility Cloak",
  "Grants and stabalize invisibility",
  1,
   "A mystical cloak that makes the wearer invisible"
);

// Damage to the adventurer
hero.takeDamage(20);

// Use thr potion
potion.use(hero);

//  no charges left but use anyway
potion.use(hero);
// confirming depletion
potion.use(hero);

// use the cloak & confirm
invisibilityCloak.use(hero);
invisibilityCloak.use(hero);
 
//rcharging//
potion.charges += 2; 
console.log(`${potion.name} recharged. Charges now: ${potion.charges}`);
//use them again if wants//
potion.use(hero);
invisibilityCloak.use(hero);

console.log("\n--- Final Item Charges ---");
console.log(`${potion.name}: ${potion.charges}`);
console.log(`${invisibilityCloak.name}: ${invisibilityCloak.charges}`);
