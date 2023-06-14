<!--
repo: js-snack-es6

SNACK 1
Il Grande Gatsby ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip. Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:
[ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']
Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in cui ogni ospite sia un oggetto javascript che ha come attributi: nome del tavolo, nome dell'ospite e posto occupato.
Generiamo e stampiamo in console la lista per i segnaposto.

SNACK 2
Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
Per preparare l'aula di un nuovo corso, dobbiamo svolgere una serie di operazioni
1. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
3.  dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo ES (Marco della Rovere => MARCO DELLA ROVERE);
Questo è l'elenco degli studenti:
Id  Name                Grades
213 Marco della Rovere      78
110 Paola Cortellessa       96
250 Andrea Mantegna 	    48
145 Gaia Borromini          74
196 Luigi Grimaldello 	    68
102 Piero della Francesca   50
120 Francesca da Polenta    84 
 
SNACK 3
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: name e weight.
Stampare in console la bici con peso minore utilizzando il destructuring

SNACK 4
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà punti fatti e falli subiti.
Infine, usando il destructuring, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

BONUS
Stampare in pagina oltre che in console!

 -->

# **SNACK 1** - Il Grande Gatsby
## FASE 1 - Preliminare
- Creare una variabile `tableName` con il nome del tavolo.
- Creare un array `vipsName` con i nomi degli invitati.
- Creo la variabile `invited`.

## FASE 1b - Funzioni
- Creare una funzione `arrayToObject` che prende come parametri, `array` e `stringa`.
    - Creare un'array `object`
    - **FOR ?** gli elementi dell'`array`:
        - Crea un oggetto `contact`.
        - Prende il valore dell'elemento e lo associa alla chiave `name` di `contact`.
        - Prende l'argomento `stringa` e lo associa alla chiave `table` di `contact`.
        - Prende l'indice dell'elemento e lo associa alla chiave `reservation` di `contact`.
        - Aggiunge `contact` ad `object`.
    - *Ritorno* `object`.
## FASE 2 - Svolgimento
- Associo ad `invited` il risultato di `arrayToObject` con argomenti `vipsName` e `tableName`.
- Stampo in console `invited`.

<br>

# **SNACK 2** - Studenti
## FASE 1 - Preliminare
- Creare un array `students` di oggetti con i dati degli studenti.
## FASE 2 - Svolgimento
- **FILTER** dell'array `students` con filtro del voto > 70.
    - Mettere il risultato in un array `over70`.
- **FILTER** dell'array `students` con filtro del voto > 70 ed id > 120.
    - Mettere il risultato in un array `over70And120`.
- **MAP?** dell'array `students`:
    - Per ogni ciclo prelevare il nome studente e passarlo in `toUpperCase()`.
    - Mettere il risultato in un array `upperCaseName`.
- Stampare in console i 3 array `over70`, `over70And120` e `upperCaseName`.

<br>

# **SNACK 3** - Bici
## FASE 1 - Preliminare
- Collego gli elementi del DOM
- Creo un array di oggetti `bikes` contenenti le key `name` e `weight` per ogni oggetto.
- Creo una variabile d'appoggio `bikesWeight` con valore `10000`.
- Creo un array chiamato `lighterBike`.
- Creo una variabile `toInject`.
## FASE 2 - Svolgimento
- **CICLO FOR** per ogni oggetto in `bikes`:
    - **SE** `weight` è minore di `bikesWeight`:
        - Aggiorna il valore di `bikesWeight` con `weight`.
        - Svuota `lighterBike`.
        - Pusho l'oggetto corrente in `lighterBike`.
        - Aggiorno la variabile `toInject` con il template literal.
- Stampo in console `lighterBike`.
- Stampo in pagina.
    
<br>

# **SNACK 4** - Soccer
## FASE 1 - Preliminare
- Collego gli elementi del DOM
- Creo un array di oggetti `team` contenenti le key `teamName`, `scoreDone` e `sufferedFouls` per ogni oggetto.
- Creo una variabile con nome `stringToInject`.
## FASE 1b - Funzioni
- Crare una funzione chiamata `generateNumber` che accetta 2 parametri, `min` e `max`.
## FASE 2 - Svolgimento
- **PER OGNI** oggetto in array `team`:
    - Assegna alla chiave `scoreDone` e `sufferedFouls` il risultato di `generateNumber`.
- **FILTER** su `team` per generare un array `filteredResult` dei soli valori `teamName` e `sufferedFouls`.
- Stampo in console `filteredResult`.
- **PER OGNI** elemento di `filteredResult`:
    - Crea un template literal da aggiungere a `stringToInject`.
- Stampa in pagina `stringToInject`.
