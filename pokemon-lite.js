import chalk from "chalk";



class Pokemon {
    constructor(name, health, magic) {
        this.name = name, 
        this.health = health, 
        this.magic = magic, 
        this.skills = [], 
        this.counter = 0;
    } 

    static colorMapping = {
        "Pikachu": chalk.yellow,
        "Bulbasaur": chalk.green,
        "Squirtle": chalk.blue,
        "Charmander": chalk.red
    }

    getColor(){
        return Pokemon.colorMapping[this.name] || chalk.white;
    }

    learnAttackSkill(newSkill) {
        this.skills.push(newSkill)
            return `${this.getColor()(this.name)} learned ${newSkill}!`
    }

    showStatus() {
        if(this.counter >= 3) {
            return `${this.getColor()(this.name)} has won the battle!\n ${this.getColor()(this.name)}\n health:${this.health}\n magic:${this.magic}`
    } else {
        return `${this.getColor()(this.name)}\n health:${this.health}\n magic:${this.magic}`
    }
    }
    getMagics() {
        const empowering = Math.floor(Math.random()*21);

        this.magic += empowering

    }

    hasEnoughMagic(skillName) {
        const skill = this.skills.find(skill => skill.attack === skillName);

        if(skill && this.magic >= skill.magic) {
            return true;
        } else {
            return false;
        }
    
    }

    isAlive() {
        if(this.health > 0) {
            return true;

        } else {
            return false;
        }

    }

    attack(skillName, opponent) {
        if(this.isAlive() && this.hasEnoughMagic(skillName)) {
            const skill = this.skills.find(skill => skill.attack === skillName)
            if(skill) {
            console.log(`${this.getColor()(this.name)} uses ${skillName} on ${opponent.getColor()(opponent.name)}`)
                    this.magic -= skill.magic;
                    

                    const damage = skill.damage;
                    opponent.health -= damage;


                    if(opponent.health <= 0) {
                        opponent.health = 0;
                        console.log(`${opponent.getColor()(opponent.name)} takes ${damage} damage. Remaining health: ${opponent.health}`);
                        console.log(`${opponent.getColor()(opponent.name)} is dead and can no longer fight`)
                    } else {
                        console.log(`${opponent.getColor()(opponent.name)} takes ${damage} damage. Remaining health: ${opponent.health}`);
                    }

                    this.counter++;
                    console.log(this.showStatus());
                    console.log(opponent.showStatus());
                 }
             } else {
                 console.log(`${this.getColor()(this.name)} does not have enough strength to perform ${skillName}`)
             }
        }

}


class AttackSkill {
    constructor(attack, damage, magic) {
        this.attack = attack, 
        this.damage = damage,
        this.magic = magic
    }
}



// Getting new Pokemon

let pikachu = new Pokemon("Pikachu", 120, 80); 
let squirtle = new Pokemon("Squirtle", 95, 105)
let bulbasaur = new Pokemon("Bulbasaur", 100, 90)
let charmander = new Pokemon("Charmander", 110, 95)


// Creating new attack skills 

//Pikachu
let lightning = new AttackSkill("lighting", 40, 30)
let thunderShock = new AttackSkill("thunderShock", 50, 25)
let thunderWave = new AttackSkill("thunderWave", 50, 30)

//Squirtle
let aquaJet = new AttackSkill("aquaJet", 45, 20)
let waterPulse = new AttackSkill("waterPulse", 30, 26)
let aquaTail = new AttackSkill("aquaTail", 50, 30)

//Bulbasaur
let vineWhip = new AttackSkill("vineWhip", 45, 20)
let solarBeam = new AttackSkill("solarBeam", 50, 35)
let razorLeaf = new AttackSkill("razorLeaf", 45, 20)

//Charmander 
let scratch = new AttackSkill("scratch", 25, 15)
let ember = new AttackSkill("ember", 30, 20)
let dragonBreath = new AttackSkill("dragonBreath", 50, 30)


// Pokemon learn new skills

pikachu.learnAttackSkill(lightning)
pikachu.learnAttackSkill(thunderShock)
pikachu.learnAttackSkill(thunderWave)

squirtle.learnAttackSkill(aquaJet)
squirtle.learnAttackSkill(waterPulse)
squirtle.learnAttackSkill(aquaTail)

bulbasaur.learnAttackSkill(vineWhip)
bulbasaur.learnAttackSkill(solarBeam)
bulbasaur.learnAttackSkill(razorLeaf)

charmander.learnAttackSkill(scratch)
charmander.learnAttackSkill(ember)
charmander.learnAttackSkill(dragonBreath)

//------------------------------------------------------------------//

// Battle zone

pikachu.attack("lighting", squirtle)
squirtle.attack("waterPulse", pikachu)

pikachu.attack("thunderWave", squirtle)
squirtle.attack("aquaTail", pikachu)

pikachu.attack("thunderShock", squirtle)

charmander.attack("scratch", bulbasaur)
bulbasaur.attack("razorLeaf", charmander)

squirtle.attack("waterPulse", pikachu)
squirtle.attack("waterPulse", pikachu)

charmander.attack("scratch", bulbasaur)
bulbasaur.attack("razorLeaf", charmander)
charmander.attack("scratch", bulbasaur)
bulbasaur.attack("razorLeaf", charmander)






