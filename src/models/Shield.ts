export class Shield {
  name: string;
  durability: number;

  constructor(name: string, durability: number) {
    this.name = name;
    this.durability = durability;
  }

  repair(tool: string, amount: number) {
    this.durability += amount;
    console.log(`${tool} repairs ${this.name} by ${amount} points. Durability is now ${this.durability}`);
  }
}
export default Shield;
