console.log('**************************** SOCCER SCRIPT ****************************');

// * PHASE 1

// ? *********************** FUNCTIONS ***********************
// Generate random numbers
function generateNumber(min, max) { return Math.floor(Math.random() * (max - min)) + min; };
// ? *********************************************************

// Link to DOM elements
const soccerElement = document.getElementById('soccer');

// Create Array
const team = [
    {
        teamName: 'Juventus',
        scoreDone: 0,
        sufferedFouls: 0
    },
    {
        teamName: 'Inter',
        scoreDone: 0,
        sufferedFouls: 0
    },
    {
        teamName: 'Milan',
        scoreDone: 0,
        sufferedFouls: 0
    },
    {
        teamName: 'Cagliari',
        scoreDone: 0,
        sufferedFouls: 0
    },
    {
        teamName: 'Roma',
        scoreDone: 0,
        sufferedFouls: 0
    },
    {
        teamName: 'Napoli',
        scoreDone: 0,
        sufferedFouls: 0
    }
];

// Crate var
let stringToInject = '';