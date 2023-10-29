class Tueur {
    constructor(name, hp) {
        this.name = name
        this.hp = hp
    }
}

class Survivant {
    constructor(name, characteristics, death, esquive, attack) {
        this.name = name
        this.characteristics = characteristics
        this.death = death
        this.esquive = esquive
        this.attack = attack
    }
}

let Jason = new Tueur("Jason", 100)

let Names = ["Thomas", "Nicolas", "Matthieu", "Elisa", "Nassim", "Eva", "Mathilde", "Yohan", "Emmie", "Agathe"]

const characteristics = {
    nerd: [0.3, 0.5, 0.2],
    sportif: [0.1, 0.8, 0.1],
    solitaire: [0.6, 0.2, 0.2],
    fêtard: [0.7, 0.2, 0.1],
    intelligent: [0.2, 0.4, 0.4],
}

const survivants = []
const morts = []

function genererSurvivant() {
    const nomIndex = Math.floor(Math.random() * Names.length)
    const nom = Names.splice(nomIndex, 1)[0]
    const caracteristiqueAleatoire = Object.keys(characteristics)[Math.floor(Math.random() * Object.keys(characteristics).length)]
    const [death, esquive, attack] = characteristics[caracteristiqueAleatoire]
    delete characteristics.caracteristiqueAleatoire
    return new Survivant(nom, caracteristiqueAleatoire, death, esquive, attack)
}

function IsLucky() {
    let luck = Math.random()
    return luck
}

for (let i = 0; i < 5; i++) {
    survivants.push(genererSurvivant())
}

while (survivants.length > 0) {
    const PremierSurvivant = survivants[0]
    let random = IsLucky()

    if (random < PremierSurvivant.death) {
        console.log("Jason a tué ", PremierSurvivant.name);
        survivants.splice(0, 1)
        morts.push(PremierSurvivant.name)
    }
    else if (random < PremierSurvivant.esquive) {
        Jason.hp -= 10
        console.log(PremierSurvivant.name, "a esquivé et a infligé 10 dmg.")
        if (Jason.hp <= 0) {
            console.log("Jason est mort, les survivants ont gagné !")
            if (morts.length > 0) {
                console.log("RIP à ", morts)
            }
            break
        }
    }
    else if (random < PremierSurvivant.attack) {
        Jason.hp -= 15
        if (Jason.hp <= 0) {
            console.log(PremierSurvivant.name, "inflige 15 dmg mais meurt. Les survivants ont gagné !")
            if (morts != null) {
                console.log("RIP à ", morts)
            }
            break
        }
        console.log(PremierSurvivant.name, "inflige 15 dmg mais meurt")
        survivants.splice(0, 1)
        morts.push(PremierSurvivant.name)
    }
}

if (survivants.length === 0 && Jason.hp > 0) {
    console.log("Jason a gagné !")
} else if (Jason.hp === 0 && survivants.length > 0) {
    if (morts.length === 0) {
        console.log("Fin du jeu !")
    }
}