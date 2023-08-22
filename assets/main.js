/* Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito ed infine scrivi in pagina (non solo in console) il risultato,
che va formattato in questo modo: nomecognomecolorepreferito23 
Esempio: fabiopacificiblue23 */


/* Come agire? */

/* 
-creare un prompt chiedendo il nome dell' utente 
-creare un secondo prompt chiedendo il cognome
-creare un terzo prompt chiedendo il colore preferito
-stampare il risultato in console con console.log
-stampare il risultato in pagina con Element.innerHTML
*/

/* prompt nome utente */

const userName = prompt ('inserisci il tuo nome')

/* prompt cognome */

const userSourname = prompt ('inserisci il tuo cognome')

/* prompt colore preferito */

const favouriteColor = prompt ('inserisci il tuo colore preferito')

/* stampare il risultato in console */

console.log (userName + userSourname + favouriteColor + '23')

/* stampare il risultato in pagina */

const infoElement = document.getElementById ('info')

infoElement.innerHTML = userName + userSourname + favouriteColor + '23'