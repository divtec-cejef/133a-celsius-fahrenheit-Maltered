/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Sohan Anampalli
 * @version 0.1
 * @since   2023-09-05
 */

'use strict'; // Demande un interprétation stricte du code

document.getElementById('convertButton').addEventListener('click', () => {
    let tempCelsius = document.getElementById('inputCelsius').value;
    tempCelsius = parseInt(tempCelsius);

    if (isNaN(tempCelsius)) {
        alert('entre un nombre');
    }else {
        let resultat = tempCelsius * 9 / 5 + 32;

        document.getElementById('result').innerText += ` ${resultat}°F`;
        document.getElementById('ulCalcule').innerHTML += `<li>${tempCelsius}°C = ${resultat}°F</li>`;
    }
});

document.getElementById('resetButton').addEventListener('click', () => {
    document.getElementById('ulCalcule').innerHTML = '';
    document.getElementById('ulCalcule').innerHTML = "resultat: ";
});
