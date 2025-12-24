class Character {
  constructor(name, type, health, level, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }
}

class Team {
  constructor() {
    this.characters = [];
  }

  add(character) {
    if (character instanceof Character) {
      this.characters.push(character);
    } else {
      throw new Error("Invalid character");
    }
  }

  [Symbol.iterator]() {
    let index = 0;
    const characters = this.characters;

    return {
      next() {
        if (index < characters.length) {
          return { value: characters[index++], done: false };
        } else {
          return { done: true };
        }
      },
    };
  }
}

const team = new Team();
team.add(new Character("Лучник", "Bowman", 50, 1, 40, 10));
team.add(new Character("Мечник", "Swordsman", 60, 2, 50, 15));

for (const character of team) {
  console.log(character.name);
}
