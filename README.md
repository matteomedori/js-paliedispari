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
