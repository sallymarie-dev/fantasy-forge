// class for magical items
import Adventurer from './Adventurer';

export class MagicItem {
  name: string;
  effect: string;
  charges: number;
  description: string;
  constructor(name:string, effect:string, charges:number, description:string = "") {
    this.name = name;
    this.effect = effect;
    this.charges = charges;
    this.description = description;
  }

  use(target:Adventurer) {
    if (this.charges <= 0) {
      console.log(`${this.name} has no charges left.`);
      return;
    }

    this.charges--;
    console.log(
      `${target.name} uses ${this.name}: ${this.description}. Effect: ${this.effect}. Charges left: ${this.charges}`
    );
  }

  recharge(amount:number) {
    this.charges += amount;
    console.log(
      `${this.name} recharged by ${amount}. Total charges counting : ${this.charges}`
    );
  }
}

export default MagicItem;
