export class Adventurer {
  name:string;
  health:number;
  constructor(name, health) {
    this.name = name;
    this.health = health;
  }

  scout() {
    console.log(`${this.name} is scouting.... Health: ${this.health}`);
  }

  // taking damage//
  attack(target: { name: string; takeDamage: (amount: number) => void }) {
    const damage = 20;
    console.log(`${this.name} attacks ${target.name} for ${damage} damage!`);
    target.takeDamage(damage);
  }

  takeDamage(amount: number) {
    this.health -= amount;
    console.log(
      `${this.name} takes ${amount} damage. Health is now ${this.health}`
    );

    if (this.health <= 0) {
      this.health = 0;
      console.log(`${this.name} collapses!`);
    }
  }
  //Healing//
  heal(amount:number) {
    this.health += amount;
    console.log(
      `${this.name} healing ${amount} points. Health is now ${this.health}`
    );
  }
}
export default Adventurer;
