import { Adventurer } from "./Adventurer";


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

  attack(target: Adventurer) {
    console.log(`${this.name} bites ${target.name} for ${this.damage} damage!`);
    target.takeDamage(this.damage);
  }
}
