window.addEventListener('load', ()=>{
//ACA VAMOS A BUSCAR LOS BOTONES Y EL DISPLAY 

    const keypadButtons = document.getElementsByClassName('keypad-button')
    const display = document.querySelector('.calculator-display')

//Convierto la HTMLcollecion a array para poder iterar
    const keypadbuttonsArray = Array.from(keypadButtons)

    //Agregar un evento para cada click de un boton
    keypadbuttonsArray.forEach (button =>{
        button.addEventListener('click', ()=>{
        calculadora(display, button)
        //console.log(button);
        })
    })
})

function calculadora (display, button){
    switch (button.innerHTML){
        case 'C': 
            borrar(display);
            break;
        case '=':
            calcular(display);
            break;
        default:
            actualizar(display, button);
            break;
    }
}


function calcular (display){
    display.innerHTML = eval(display.innerHTML);
}


function actualizar (display, button){
    if(display.innerHTML == 0){
        display.innerHTML = '';
    }
    display.innerHTML += button.innerHTML
}

function borrar (display){
    if(display.innerHTML != 0){
        display.innerHTML = 0;
    }
}

