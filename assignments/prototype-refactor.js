
class GameObjects {
    constructor (attributes){
        this.createdAt = attributes.createdAt;
        this.name = attributes.name;
        this.dimensions = attributes.dimensions;
}


destroy () {

    return `${this.name} was removed from the game`;
    }
};



class CharacterStats extends GameObjects {
    constructor (charStatsAttributes){
        super(charStatsAttributes)
}

takeDamage() {

    return (`${this.name} took damage`);

    }
};

class Humanoid extends CharacterStats{ 
    constructor (humanoidAttributes){
    super(humanoidAttributes)
        this.healthPoints = humanoidAttributes.healthPoints;
        this.team = humanoidAttributes.team;
        this.weapons = humanoidAttributes.weapons;
        this.language = humanoidAttributes.language;
}

greet() {

    return(`${this.name} offers a greeting in ${this.language}`);

}
goToBattle () {

    return(`${this.name} runs into battle screaming: ${this.battleCry}`);
}

battleSwing () {

    const numberGen = {
    sides: 10,
        roll: function () {
            let randomNumber = Math.floor(Math.random() * this.sides) + 1;
            return randomNumber;
            }
    };

        return(`${this.name} swung their ${this.weapons[0]} dealing ${numberGen.roll()} damage!`);
    };
};


//Hero
class Hero extends Humanoid {
    constructor (heroAttributes){
    super(heroAttributes)
        this.battleCry = heroAttributes.battleCry;
}

};


//Villian

class Villian extends Humanoid  { 
    constructor(villianAttributes){
    super(villianAttributes)
        this.battleCry = villianAttributes.battleCry;
}
};




  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  const strongHero = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 4,
      height: 6,
    },
    healthPoints: 200,
    name: 'Lambda Student',
    team: 'The Round Table',
    weapons: [
      'Battle Axe',
      'Cross Bow',
    ],
    language: 'Common Tongue',
    battleCry:"AHHHHHHHHHHHHHHH"
  });

  const evilVillian = new Villian({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 4,
      height: 6,
    },
    healthPoints: 200,
    name: 'AirTable',
    team: 'Daily Standups',
    weapons: [
      'Loading Icon',
      'Wand',
    ],
    language: 'Evil Laugh',
    battleCry: "\"Error Loading Airtable\""
  });

 
    
  
  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  console.log(strongHero.goToBattle());
  console.log(evilVillian.goToBattle());
  console.log(evilVillian.battleSwing());
  
  


