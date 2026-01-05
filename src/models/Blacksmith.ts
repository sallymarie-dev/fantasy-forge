import { Adventurer } from './Adventurer';
import { Shield } from './Shield';

export class Blacksmith {
  name: string;
  repairCost: number;

  constructor(name: string, repairCost: number) {
    this.name = name;
    this.repairCost = repairCost;
  }

  hammerAndAnvil(hero: Adventurer, item: Shield) {
    console.log(`${this.name} takes the ${item.name} from ${hero.name}...`);

    // Check if hero has enough gold
    if (hero.gold < this.repairCost) {
      console.log(`${hero.name} does not have enough gold!`);
      return;
    }

    // Subtract gold
    hero.gold -= this.repairCost;

    // Repair the shield
    item.repair("Masterwork Hammer", 10);

    console.log(`CLANG! CLANG! ${hero.name}'s ${item.name} is fully repaired!`);
    console.log(`${hero.name} has ${hero.gold} gold left.`);
  }
}
