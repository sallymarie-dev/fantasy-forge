// class for magical items

class MagicItem {
  constructor(name, effect, charges) {
    this.name = name;
    this.effect = effect;
    this.charges = charges;
  }

  use(target) {
    if (this.charges <= 0) {
      console.log(`${this.name} has no charges left.`);
      return;
    }

    this.charges--;
    console.log(
      `${target.name} uses ${this.name}. Effect: ${this.effect}. Charges left: ${this.charges}`
    );
  }

  recharge(amount) {
    this.charges += amount;
    console.log(
      `${this.name} recharged by ${amount}. Total charges counting : ${this.charges}`
    );
  }
}

export default MagicItem;
