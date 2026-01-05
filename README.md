 
Here’s an **updated README** reflecting all your new features, including `gold` for Adventurers, Shields, the Blacksmith, and the expanded Game 4–5 battles. I also updated your file extensions to `.ts` since your project is now TypeScript-based.

---

# 🧙 Fantasy Forge

Fantasy Forge is a small Node.js game project built to practice **Object-Oriented Programming (OOP)** concepts using **TypeScript** and ES Modules.

The project simulates adventurers, monsters, magic items, shields, and battle scenarios across multiple game files.

---

## 🚀 Features

* Adventurer characters with **health, gold, healing, and damage**
* Shields with **durability** and **repair mechanics**
* Magic items with **limited charges** and **recharge system**
* Blacksmith service to **repair shields** safely
* Multiple game simulations (Game 1 → Game 5)
* Clean ES Module structure using `import` / `export`
* TypeScript type safety for interactions between objects

---

## 📁 Project Structure

```
fantasy-forge/
├── src/
│   ├── models/
│   │   ├── Adventurer.ts
│   │   ├── HealPotion.ts
│   │   ├── MagicItem.ts
│   │   ├── Monster.ts
│   │   ├── Shield.ts
│   │   └── Blacksmith.ts
│   ├── games/
│   │   ├── game-1.ts
│   │   ├── game-2.ts
│   │   ├── game-3.ts
│   │   ├── game-4.ts
│   │   └── game-5.ts
│   └── main-game.ts
├── .gitignore
├── package.json
└── README.md
```

---

## 🕹️ How to Run the Game

### 1. Install Node.js

Make sure Node.js **v22+** is installed:

```bash
node -v
```

### 2. Run the project

From the project root:

```bash
node src/main-game.ts
```

This will run:

* **Game 1** – basic adventurer actions
* **Game 2** – healing items, magic items, and recharges
* **Game 3** – battle simulation with magic items
* **Game 4** – monsters and adventurers fight
* **Game 5** – full type-safe battle including potion use, shield, and Blacksmith repair

---

## 🧠 Concepts Practiced

* TypeScript classes, properties, and constructors
* Instance methods and state tracking
* Object interaction between multiple classes
* ES Modules (`import` / `export`)
* Incremental feature expansion (potion, shield, Blacksmith)
* Debugging runtime errors and type safety

---

## ✨ Example Output

### Game 1

```
Fantasy Forge initialized!
Robin takes 20 damage. Health is now 60
Robin heals 15 points. Health is now 75
Lurona takes 10 damage. Health is now 50
Lurona heals 25 points. Health is now 75
Robin's final health: 75
Lurona's final health: 75
Robin is scouting.... Health: 75
```

### Game 2

```
Game 2 initialized!
Nolora takes 20 damage. Health is now 30
Nolora uses Minor Heal Potion and heals 30 HP. Health is now 60. Charges left: 1
Nolora uses Minor Heal Potion and heals 30 HP. Health is now 90. Charges left: 0
Minor Heal Potion has no charges left.
Nolora uses Invisibility Cloak: A mystical cloak that makes the wearer invisible. Effect: Grants and stabilize invisibility. Charges left: 0
Minor Heal Potion recharged. Charges now: 2
Nolora uses Minor Heal Potion and heals 30 HP. Health is now 120. Charges left: 1

--- Final Item Charges ---
Minor Heal Potion: 1
Invisibility Cloak: 0
```

### Game 3

```
Game 3 initialized!
--- Initial States ---
Fluriti Health: 100
Dovina Health: 80
Minor Healing Potion Charges: 2
Strength Elixir Charges: 1

--- Battle Start ---
Dovina takes 25 damage. Health is now 55
Dovina is hurt!
Dovina uses Minor Healing Potion: A small purple vial that restores vitality. Effect: Heals 30 HP. Charges left: 1
Dovina heals 30 points. Health is now 85
Fluriti takes 15 damage. Health is now 85
Fluriti uses Strength Elixir: A glowing blue potion that strengthens your strike. Effect: Boosts attack by 20. Charges left: 0
Fluriti's attack boosted by 20!
Dovina takes 35 damage. Health is now 50

--- Battle Summary ---
Fluriti Health: 85
Dovina Health: 50
Minor Healing Potion Charges left: 1
Strength Elixir Charges left: 0
```

### Game 4 (Monsters)

```
--- A Monster Appears! ---
Goblin Grunt lets out a terrifying roar!

--- The Battle Begins ---
Goblin Grunt bites Sir Brave for 15 damage!
Sir Brave takes 15 damage. Health is now 85
Sir Brave attacks Goblin Grunt for 20 damage!
Goblin Grunt takes 20 damage. Health is now 40

--- Battle Status ---
Sir Brave Health: 85
Goblin Grunt Health: 40
```

### Game 5 (Type-Safe Battle with Blacksmith)

```
--- BATTLE START ---
Bugbear bites TypeScript Warrior for 15 damage!
TypeScript Warrior takes 15 damage. Health is now 85
TypeScript Warrior uses Syntax Elixir and heals 20 HP. Health is now 105. Charges left: 1

--- Oh no! Heroic Shield was damaged in the fight ---
Heroic Shield durability is now 20

--- Hero goes to the Blacksmith ---
Gorim takes the Heroic Shield from TypeScript Warrior...
Masterwork Hammer repairs Heroic Shield by 10 points. Durability is now 30
CLANG! CLANG! TypeScript Warrior's Heroic Shield is fully repaired!
TypeScript Warrior has 30 gold left.

--- Hero retaliates ---
TypeScript Warrior attacks Bugbear for 20 damage!
Bugbear takes 20 damage. Health is now 60

--- BATTLE STATUS ---
TypeScript Warrior Health: 105
Bugbear Health: 60
TypeScript Warrior Gold: 30
Heroic Shield Durability: 30
Syntax Elixir Charges Left: 1
```

---

## 📌 Notes

* The project is intentionally **console-based** for learning purposes
* Health, gold, durability, and effects are manually applied to reinforce understanding
* Designed to be expanded with enemies, inventories, or turn systems

---

## 👩‍💻 Author

**Sally Watson**
Learning JavaScript, TypeScript, Node.js, and OOP through hands-on projects

---

## 🛠️ Future Ideas

* Additional enemy classes (Goblin, Dragon, Bugbear)
* Inventory system for items, potions, shields
* Turn-based combat loop
* Status effects (poison, stun, burn)
* Maximum health limits
* Blacksmith upgrades and repair costs scaling

---

🕹️ How to Run the Game
1. Install Node.js

Make sure Node.js v22+ is installed:

node -v

2. Install project dependencies

From the project root, run:

npm install


This will install:

TypeScript – for type safety

tsx – to run TypeScript files directly

Any other dependencies (if added later)

3. Add npm scripts to package.json

Make sure your package.json has these scripts:

"scripts": {
  "start": "tsx src/main-game.ts",
  "dev": "tsx watch src/main-game.ts"
}


npm run start → Runs all games once

npm run dev → Runs all games in watch mode, automatically reloading when you save changes

4. Run the game

To run once:

npm run start


To run in watch mode while editing:

npm run dev

✅ What happens when you run the project

Game 1 → Basic adventurer actions

Game 2 → Healing and magic items with charges and recharge

Game 3 → Battle simulation with adventurers and magic items

Game 4 → Monster fights, attack and take damage

Game 5 → Type-safe battle with potion use, shields, and Blacksmith repairs

Notes

All games are console-based

You can expand by adding new items, enemies, or full turn-based combat

Using tsx allows you to run TypeScript directly without compiling to JavaScript
---


