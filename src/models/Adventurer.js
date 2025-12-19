class Adventurer {
  constructor(name, health) {
    this.name = name;
    this.health = health;
  }

  scout() {
    console.log(`${this.name} is scouting.... Health: ${this.health}`);
  }

// taking damage//
receiveDamage(amount)
{
  this.health -= amount;
  console.log(
    `${this.name} takes ${amount} of damage. Health is now ${this.health}`
  );
}
//Healing//
heal(amount)
{
  this.health += amount;
  console.log(
    `${this.name} healing ${amount} points. Health is now ${this.health}`
  );
}
}
export { Adventurer };
