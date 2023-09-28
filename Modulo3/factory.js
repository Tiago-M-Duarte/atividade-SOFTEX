class Componentes {
    getRAM() {}
    getHDD() {}
    getCPU() {}
    getType() {}
    toString() {}
}

class PC extends Componentes {
    getRAM() {
        return 'RAM: 4GB'
    }
    getHDD() {
        return 'HDD: 240GB'
    }
    getCPU() {
        return 'CPU: 2.8GHz'
    }
    getType() {
        return 'PC'
    }
    toString() {
        return this.getType() + ' possui ' + this.getRAM() + ', ' + this.getHDD() + ', ' + this.getCPU()
    }
}

class Server extends Componentes {
    getRAM() {
        return 'RAM: 32GB'
    }
    getHDD() {
        return 'HDD: 3000GB'
    }
    getCPU() {
        return 'CPU: 3.8GHz'
    }
    getType() {
        return 'Server'
    }
    toString() {
        return this.getType() + ' possui ' + this.getRAM() + ', ' + this.getHDD() + ', ' + this.getCPU()
    }
}

class ComputerFactory {
    createComputer(type) {
        switch (type) {
            case 'PC':
                const pc = new PC()
                console.log(pc.toString())
                break
            case 'Server':
                const server = new Server()
                console.log(server.toString())
                break
            default:
                console.log('Tipo inexistente')
        }
    }
}

const computerFactory = new ComputerFactory()

computerFactory.createComputer('PC')
computerFactory.createComputer('Server')