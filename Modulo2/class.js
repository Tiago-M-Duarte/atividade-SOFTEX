class Copo { // Classe copo identifica copo
    constructor (){}
    static cheio(vol, ml){ // static cheio verifica volume do copo e a quantidade de ml's nele
        let result
        switch(true){
            // Se não houver nada no copo
            case ml == 0:
                result = 'Copo vazio'
                break
            // Se tiver mais liquido que o volume do copo
            case vol < ml:
                result = 'Copo extravasando'
                break
            // Se ml for equivalente ao volume
            case vol == ml:
                result = 'Copo cheio'
                break
            // Se ml for maior que metade do volume do copo    
            case (vol/2) < ml:
                result = 'Copo meio cheio' 
                break
            // Se ml for menor que metade do volume do copo
            case (vol/2) > ml:
                result = 'Copo meio vazio'
                break
            // Se der tudo errado
            default:
                result = 'Isso não é possível não doído'
        }
        return result
    }
}
console.log(Copo.cheio(223, 150))