const turnon = document.getElementById ('turnon');
const turnoff = document. getElementById ('turnoff');
const lamp = document. getElementById ('lamp');

function islampBroken () {
   return lamp.src.indexOf ( 'quebrada' ) > -1
}

function lampon () {
    if (!islampBroken () ) {
       lamp.src = './img/ligada.jpg';  
    }
}

function lampoff () {
    if (!islampBroken () )
    lamp.src = './img/desligada.jpg';
}

function lampBroken () {
    lamp.src = './img/quebrada.jpg';
}

turnoff.addEventListener ('click' , lampoff);
turnon.addEventListener ('click' , lampon);
lamp.addEventListener ( 'mouseover', lampon);
lamp.addEventListener ( 'mouseleave', lampoff);
lamp.addEventListener ('dblclick' , lampBroken);