const playlist = ["Anissa - Wejdene", "Turn on the light on again.. - Fred Again..", "Here we go again - Oliver Tree", "Overthinker - INZO", "RENCONTRE - Disiz"]

class user {
    constructor(name, SanteMentale) {
        this.name = name
        this.SanteMentale = SanteMentale
    }
}

let John = new user("John", 10)
var Taxi = 0

function boucle() {
    for (i = 1; i < 31; i++) {
        if (John.SanteMentale < 1) {
            console.log("explosion")
            return
        }
        feuxrouge(John)
        console.log("il reste", 30 - i, "feux")
    }
    console.log("Il est arrive chez lui et il lui a fallu", Taxi, "changements de taxi")
}

function feuxrouge(passager) {
    const Pioche = Math.floor(Math.random() * playlist.length)
    const chansonAleatoire = playlist[Pioche]
    console.log("La musique jouee est", chansonAleatoire)
    if (chansonAleatoire == "Anissa - Wejdene") {
        passager.SanteMentale -= 1
        Taxi += 1
    }
}

boucle()