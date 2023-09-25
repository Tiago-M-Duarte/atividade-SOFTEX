
class Sanduiche {
    constructor() {
        this.descricao = "Sanduíche"
    }

    custo() {
        return 0
    }

    descricaoDoSanduiche() {
        return this.descricao
    }
}


class FrangoAssado extends Sanduiche {
    constructor() {
        super()
        this.descricao = "Sanduíche de frango assado"
    }

    custo() {
        return 4.5
    }
}


class Pepperoni extends Sanduiche {
    constructor(sanduiche) {
        super()
        this.sanduiche = sanduiche
    }

    custo() {
        return this.sanduiche.custo() + 0.99
    }

    descricaoDoSanduiche() {
        return this.sanduiche.descricaoDoSanduiche() + ", pepperoni"
    }
}


class QueijoMussarelaRalado extends Sanduiche {
    constructor(sanduiche) {
        super()
        this.sanduiche = sanduiche
    }

    custo() {
        return this.sanduiche.custo() + 2.0
    }

    descricaoDoSanduiche() {
        return this.sanduiche.descricaoDoSanduiche() + ", queijo mussarela ralado"
    }
}

let sanduiche = new FrangoAssado()
sanduiche = new Pepperoni(sanduiche)
sanduiche = new QueijoMussarelaRalado(sanduiche)

console.log(`${sanduiche.descricaoDoSanduiche()} custa $${sanduiche.custo().toFixed(2)}.`)
