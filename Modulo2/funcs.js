function func1() {
    console.log('func1 rodada')
}

function func2(param) {
    console.log(param + ' foi rodada')
}

const arrowFunc = (param) => {console.log(param + ' foi rodada também.')}

func1()
func2('func2')
arrowFunc('arrowFunc')
