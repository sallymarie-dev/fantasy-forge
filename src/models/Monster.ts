export class Monster {
  name: string;
  health: number;
  damage: number;

  constructor(name: string, health: number, damage: number) {
    this.name = name;
    this.health = health;
    this.damage = damage;
  }

  roar() {
    console.log(`${this.name} lets out a terrifying roar!`);
  }

   attack(target: { name: string; takeDamage: (amount: number) => void }) {
    console.log(`${this.name} bites ${target.name} for ${this.damage} damage!`);
    target.takeDamage(this.damage);
  }

 takeDamage(amount: number) {
    this.health -= amount;
    console.log(
      `${this.name} takes ${amount} damage. Health is now ${this.health}`
    );

    if (this.health <= 0) {
      this.health = 0;
      console.log(`${this.name} has been slain! ☠️`);
    }
  }

}
