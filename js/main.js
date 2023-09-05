/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Steve Fallet
 * @version 0.1
 * @since   2019-08-19
 */


'use strict'; // Demande un interprétation stricte du code

let a = 'Bonjour';

console.log(a);


let tempCelcus = prompt('Température en celcus:');

tempCelcus = parseInt(tempCelcus);

if (isNaN(tempCelcus)) {
    alert('entre un nombre');
}  else {
    alert(`${tempCelcus}°C = ${tempCelcus * 9 / 5 + 32}°F`);
}

// [°F] = [°C] x 9 / 5 + 32
