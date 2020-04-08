let counter = document.getElementById('counter')
let countSum = document.getElementById('countSum')
let countRest = document.getElementById('countRest')
let btnSum = document.getElementById('btnSum')
let btnRest = document.getElementById('btnRest')


let initial = {counter: 0, counterSum:0, counterRest:0}

let reductor = (estado = initial, accion) => {
    switch (accion.type) {
        case 'SUMAR':
            return {...estado, counter: estado.counter + 1,counterSum: estado.counterSum + 1}
        case 'RESTAR':
            return {...estado, counter: estado.counter - 1, counterRest: estado.counterRest + 1}
        default:
            return estado
    }
}
let tienda = Redux.createStore(reductor)

btnSum.addEventListener('click', function(){
    tienda.dispatch({type:'SUMAR'})
})
btnRest.addEventListener('click', function(){
    tienda.dispatch({type:'RESTAR'})
})

const run = () => {
    counter.innerHTML = tienda.getState().counter
    countSum.innerHTML = tienda.getState().counterSum
    countRest.innerHTML = tienda.getState().counterRest
    console.log(tienda.getState())
}

tienda.subscribe(run)
run()