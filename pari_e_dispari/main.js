"use strict";

/*
FUNCTIONS
*/

function random(min, max, includes) {
  let numeroRandom;
  //estremi inclusi
  if (includes) {
    numeroRandom = Math.floor(Math.random() * (max - min + 1) + min);
  } else {
    // estremi esclusi
    min++;
    max--;
    numeroRandom = Math.floor(Math.random() * (max - min + 1) + min);
  }
  return numeroRandom;
}

function pari(numero) {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

/*
OPERATIONS
*/

const sceltaUtente = prompt("Scegli: PARI o DISPARI").toUpperCase();
const numeroUtente = Number(prompt("Inserisci un numero da 1 a 5"));
const numeroComputer = random(1, 5, true);

if (
  (pari(numeroUtente + numeroComputer) && sceltaUtente === "PARI") ||
  (!pari(numeroUtente + numeroComputer) && sceltaUtente === "DISPARI")
) {
  console.log(`Scelta utente: ${sceltaUtente}
Numero utente: ${numeroUtente}
Numero computer: ${numeroComputer}
Somma numeri: ${numeroUtente + numeroComputer}
Vince l'utente!`);
} else {
  console.log(`Scelta utente: ${sceltaUtente}
Numero utente: ${numeroUtente}
Numero computer: ${numeroComputer}
Somma numeri: ${numeroUtente + numeroComputer}
Vince il computer!`);
}
