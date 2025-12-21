import Adventurer from "../models/Adventurer.js";
import MagicItem from "../models/MagicItem.js";

console.log("Game 3 initialized!");

// Create Adventurers
const braveHero = new Adventurer("Fluriti", 100);
const cunningRogue = new Adventurer("Dovina", 80);

//MagicItems
const minorHealingPotion = new MagicItem(
  "Minor Healing Potion",
  "Heals 30 HP",
  2
);
const strengthElixir = new MagicItem(
  "Strength Elixir",
  "Boosts attack by 20",
  1
);

console.log("\n--- Initial States ---");
console.log(`${braveHero.name} Health: ${braveHero.health}`);
console.log(`${cunningRogue.name} Health: ${cunningRogue.health}`);
console.log(
  `${minorHealingPotion.name} Charges: ${minorHealingPotion.charges}`
);
console.log(`${strengthElixir.name} Charges: ${strengthElixir.charges}`);

// Battle Scenario dialogue
console.log("\n--- Battle Start ---");

// BraveHero attacks CunningRogue
cunningRogue.receiveDamage(25);
console.log(`${cunningRogue.name} is hurt!`);

// CunningRogue uses Healing Potion
minorHealingPotion.use(cunningRogue);
// Apply healing effect manually
cunningRogue.heal(30);

// CunningRogue attacks BraveHero
braveHero.receiveDamage(15);

// BraveHero uses Strength Elixir
strengthElixir.use(braveHero);
// Apply attack boost
console.log(`${braveHero.name}'s attack boosted by 20!`);

// BraveHero attacks CunningRogue again with boost
cunningRogue.receiveDamage(35);

// summary her
console.log("\n--- Battle Summary ---");
console.log(`${braveHero.name} Health: ${braveHero.health}`);
console.log(`${cunningRogue.name} Health: ${cunningRogue.health}`);
console.log(
  `${minorHealingPotion.name} Charges left: ${minorHealingPotion.charges}`
);
console.log(`${strengthElixir.name} Charges left: ${strengthElixir.charges}`);
