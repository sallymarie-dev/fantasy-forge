class HealPotion {
  constructor(name, healAmount, charges) {
    this.name = name;
    this.healAmount = healAmount;
    this.charges = charges;
  }
  use(target) {
    if (this.charges <= 0) {
      console.log(`${this.name} has no charges left.`);
      return;
    }
    target.health += this.healAmount;
    this.charges--;
    console.log(
      `${target.name} used ${this.name} and heal ${this.healAmount}HP. Health is now ${target.health}. Has charges left: ${this.charges} `
    );
  }
}
export default HealPotion;
