class Pokemon {
    constructor(name, attack, defense, hp, luck) {
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
    }

    isLucky() {
        return Math.random() < this.luck
    }

    attackPokemon(defenseur) {
        if(this.isLucky()){
            let damage = this.attack - defenseur.defense
            defenseur.hp -= damage
            console.log(defenseur.name+" à perdu "+damage+" hp")
            console.log("il lui reste "+ defenseur.hp)
        }
        else {
            console.log("l'attaque à échouée")
        }
    }
}

let bulbizarre = new Pokemon("bulbizarre", 50, 25, 120, 0.7)
let salameche = new Pokemon("Salameche", 35, 40, 150, 0.8)

while(salameche.hp > 0 && bulbizarre.hp > 0) {

    salameche.attackPokemon(bulbizarre)

    if(bulbizarre.hp <= 0){
        console.log("Bulbizarre est KO")
        break;
    }

    bulbizarre.attackPokemon(salameche)

    if(salameche.hp <= 0){
        console.log("Salameche est KO")
        break;
    }
}