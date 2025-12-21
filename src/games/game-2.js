import Adventurer from "../models/Adventurer.js";
import HealPotion from "../models/HealPotion.js";

console.log("Game 2 initialized!");

// Creating new adventurer
const hero = new Adventurer("Nolora", 50);

// Creating potion
const potion = new HealPotion("Minor Heal Potion", 30, 2);

// Damage to the adventurer
hero.receiveDamage(20);

// Use thr potion
potion.use(hero);

//  no charges left but use anyway
potion.use(hero);
