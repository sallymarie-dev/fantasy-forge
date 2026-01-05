class Adventurer {
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
  receiveDamage(amount:number) {
    this.health -= amount;
    console.log(
      `${this.name} takes ${amount} of damage. Health is now ${this.health}`
    );
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
