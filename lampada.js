const turnon = document.getElementById('turnon');
const turnoff = document.getElementById('turnoff');
const lamp = document.getElementById('lamp');
const change = document.getElementById('trocar');

function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1;
}

function lampOn() {
    if (!isLampBroken())
        lamp.src = './img/ligada.jpg';
}

function lampOff() {
    if (!isLampBroken())
        lamp.src = './img/desligada.jpg';
}

function lampBroken() {
    lamp.src = './img/quebrada.jpg';
}

function changeLamp() {
    lamp.src = './img/desligada.jpg';
}

turnoff.addEventListener('click', lampOff);
turnon.addEventListener('click', lampOn);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);
change.addEventListener('click', changeLamp);
