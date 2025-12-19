class Adventurer {
  constructor(name, health) {
    this.name = name;
    this.health = health;
  }
  scout() {
    console.log(`${this.name} is scouting.... Health: ${this.health}`);
  }
}
export { Adventurer };
