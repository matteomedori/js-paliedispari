"use strict";

/*
FUNCTIONS
*/

function palindroma(parola) {
  //inizilizzo una variabile che cambia solo quando non è palindroma
  let palindroma = true;
  let i = 0;
  let j = parola.length - 1;
  while (i < j && palindroma) {
    if (parola[i] === parola[j]) {
      i++;
      j--;
    } else {
      palindroma = false;
    }
  }
  return palindroma;
}

/*
OPERATIONS
*/

//parola inserita dall'utente
const parolaInserita = prompt("Inserisci una parola");

if (palindroma(parolaInserita)) {
  console.log(`Hai inserito la parola: ${parolaInserita}`);
  console.log("La parola inserita è palindroma");
} else {
  console.log(`Hai inserito la parola: ${parolaInserita}`);
  console.log("La parola inserita non è palindroma");
}
