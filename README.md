# 🧙 Fantasy Forge

Fantasy Forge is a small Node.js game project built to practice **Object-Oriented Programming (OOP)** concepts using JavaScript and ES Modules.

The project simulates adventurers, magic items, and battle scenarios across multiple game files.

## 🚀 Features

- Adventurer characters with health, healing, and damage
- Magic items with limited charges and recharge mechanics
- Multiple game simulations (Game 1, Game 2, Game 3)
- Clean ES Module structure using `import` / `export`

---

## 📁 Project Structure

```

fantasy-forge/
├── src/
│   ├── models/
│   │   ├── Adventurer.js
│   │   ├── HealPotion.js
│   │   └── MagicItem.js
│   ├── games/
│   │   ├── game-1.js
│   │   ├── game-2.js
│   │   └── game-3.js
│   └── main-game.js
├── .gitignore
├── package.json
└── README.md


## 🕹️ How to Run the Game

### 1. Install Node.js
Make sure Node.js **v22+** is installed:

node -v

### 2. Run the project

From the project root:

node src/main-game.js


This will run:

* Game 1 (basic adventurer actions)
* Game 2 (healing items and recharges)
* Game 3 (battle simulation with magic items)

---

## 🧠 Concepts Practiced

* JavaScript classes and constructors
* Instance methods and state
* ES Modules (`import` / `export`)
* Object interaction between multiple classes
* Incremental feature expansion
* Debugging runtime errors

---

## ✨ Example Output

```
Dovina uses Minor Healing Potion: A small purple vial that restores vitality.
Effect: Heals 30 HP. Charges left: 1
```

---

## 📌 Notes

* This project is intentionally console-based for learning purposes
* Health and effects are manually applied to reinforce understanding
* Designed to be expanded with enemies, inventories, or turn systems

---

## 👩‍💻 Author

**Sally Watson**
Learning JavaScript, Node.js, and OOP through hands-on projects

---

## 🛠️ Future Ideas

* Enemy classes (Goblin, Dragon)
* Inventory system
* Turn-based combat loop
* Max health limits
* Status effects (poison, stun)


CONSOLE LOG:
Fantasy Forge initialized!
Robin takes 20 of damage. Health is now 60
Robin healing 15 points. Health is now 75
Lurona takes 10 of damage. Health is now 50
Lurona healing 25 points. Health is now 75
Robin's final health: 75
Lurona's final health: 75
 First Adventurer person
Robin is scouting.... Health: 75



Game 2 initialized!
Nolora takes 20 of damage. Health is now 30
Nolora used Minor Heal Potion and heal 30HP. Health is now 60. Has charges left: 1 
Nolora used Minor Heal Potion and heal 30HP. Health is now 90. Has charges left: 0 
Minor Heal Potion has no charges left.
Nolora uses Invisibility Cloak: A mystical cloak that makes the wearer invisible. Effect: Grants and stabalize invisibility. Charges left: 0
Invisibility Cloak has no charges left.
Minor Heal Potion recharged. Charges now: 2
Nolora used Minor Heal Potion and heal 30HP. Health is now 120. Has charges left: 1 
Invisibility Cloak has no charges left.

--- Final Item Charges ---
Minor Heal Potion: 1
Invisibility Cloak: 0



Game 3 initialized!

--- Initial States ---
Fluriti Health: 100
Dovina Health: 80
Minor Healing Potion Charges: 2
Strength Elixir Charges: 1

--- Battle Start ---
Dovina takes 25 of damage. Health is now 55
Dovina is hurt!
Dovina uses Minor Healing Potion: A small purple vial that restores vitality.. Effect: Heals 30 HP. Charges left: 1
Dovina healing 30 points. Health is now 85
Fluriti takes 15 of damage. Health is now 85
Fluriti uses Strength Elixir: A glowing blue potion that strengthens your strike.. Effect: Boosts attack by 20. Charges left: 0
Fluriti's attack boosted by 20!
Dovina takes 35 of damage. Health is now 50

--- Battle Summary ---
Fluriti Health: 85
Dovina Health: 50
Minor Healing Potion Charges left: 1
Strength Elixir Charges left: 0

