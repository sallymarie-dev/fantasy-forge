export class HealPotion {
  name:string;
  healAmount:number;
  charges:number;

  constructor(name:string, healAmount:number, charges:number) {
    this.name = name;
    this.healAmount = healAmount;
    this.charges = charges;
  }

   use(target: { name: string; heal: (amount: number) => void }) {
    if (this.charges <= 0) {
      console.log(`${this.name} has no charges left.`);
      return;
    }

    target.heal(this.healAmount);
    this.charges--;

    console.log(
      `${target.name} used ${this.name} and healed ${this.healAmount} HP. Charges left: ${this.charges}`
    );
  }
}

export default HealPotion;