/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*
String, è una sequenza di caratteri delimitata da ",' o `" può essere una qualsiasi parola come un nome, un cognome.
let nomeAlunno = "Matteo";
let cognomeAlunno = "Chieffa";

Number si usa per assegnare un dato numerico
let numeroPartecipanti = 40;
let etaAlunno = 35;

Boolean, si indica per dare un valore true o false ad una variabile ovvero se qualcosa sia Vero o Falso.
let alunnoPresente = true;
let alunno assente = false;

null, si indica un valore vuoto ovvero la variabile non contiene nulla, esempio una ciotola è vuota.

lel sale = null
let zucchero = null

undefined, indica che la variabile dichiarata non ha alcun valore, quindi il suo contenuto non è definito ovvero una ciotala senza specificare se ci sia e cosa ci sia al suo interno.

let zucchero
let sale

*/




/* ESERCIZIO 2
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let firstNumber = 12;
let secondNumber = 20;
let sommaNumeri = firstNumber + secondNumber;

console.log (sommaNumeri);

/* ESERCIZIO 3
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let numberPartecipant = 12;

/* ESERCIZIO 4
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName = "Matteo";

/* ESERCIZIO 5
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let primoNumero = 12;
let secondoNumero = 4;
let variabileSottrazione = primoNumero - secondoNumero;

console.log(variabileSottrazione);

/* ESERCIZIO 6
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let myName1 = 'matteo'
let myName2 = 'Matteo'
console.log(myName1 === myName2)
console.log(myName1.toLowerCase() === myName2.toLowerCase())
