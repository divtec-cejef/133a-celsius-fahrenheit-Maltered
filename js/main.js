/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Sohan Anampalli
 * @version 0.1
 * @since   2023-09-05
 */

'use strict'; // Demande un interprétation stricte du code


function calculerTemp() {
    let tempCelsius = document.getElementById('inputCelsius').value;
    tempCelsius = parseInt(tempCelsius);

    if (isNaN(tempCelsius)) {
        alert('entre un nombre');
    }else {
        let resultat = tempCelsius * 9 / 5 + 32;

        document.getElementById('result').innerHTML = `⠀${resultat}°F`;
        document.getElementById('ul-calcule').innerHTML += `<li>${tempCelsius}°C = 
                                                                          ${resultat}°F</li>`;
    }
}

document.getElementById('convertButton').addEventListener('click', () => {
    calculerTemp();
});

document.getElementById('resetButton').addEventListener('click', () => {
    document.getElementById('ul-calcule').innerHTML = '';
    document.getElementById('result').innerHTML = '';
});
