## Palindroma

Programma che chiede all’utente di inserire una parola e stampa in console se è palindroma o meno.

- creo una variabile dove salvare la parola inserita dall'utente.
- creo una funzione che ha come parametro la stringa da controllare
- all'interno della funzione creo una variabile nominata palindroma inizializzata a true che diventa false solo se la parola non è palindroma
- creo una variabile i inizializzata a 0
- creo una variabile j inizializzata alla lunghezza della stringa -1
- creo un ciclo che esegue finché i < j e finché la parola è palindroma
  - se la lettera in posizione i e j è uguale
    - incremento i
    - decremento j
  - altrimenti
    - palindroma diventa false
- ritorno il valore di palindroma

## Pari e Dispari

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

- creo una variabile dove inserire la scelta dell'utente(pari o dispari)
- creo una variabile dove inserire il numero scelto dell'utente(da 1 a 5)
- creo una funzione per generare numeri random con parametri min,max,includes ovvero gli estremi entro cui generare il numero e una variabile che indica se voglio che gli estremi siano inclusi
  - all'interno della funzione creo una variabile numeroRandom
  - se includes è true(dunque voglio gli estremi inclusi)
  - genero un numero random tra min e max compresi con la funzione random()
  - altrimenti
  - incremento min
  - decremento max
  - genero un numero random tra min e max compresi con la funzione random()
  - ritorno numeroRandom
- creo una variabile dove inserire il numero generato per il computer(tramite la funzione creata prima)
- creo una funzione che ritorna true se il parametro in ingresso è pari, false altrimenti
  - all'interno della funzione se il numero diviso per 2 ha resto 0
    - ritorno true
  - altrimenti ritorno false
- se la somma tra il numero scelte dall'utente e quello generato per il computer è pari e l'utente ha scelto pari oppure la somma è dispari e l'utente ha scelto dispari
  - stampo che l'utente ha vinto
- altrimenti
  - stampo che l'utente ha perso
