console.log('**************************** SOCCER SCRIPT ****************************');

// * PHASE 1

// ? *********************** FUNCTIONS ***********************
// Generate random numbers
function generateNumber(min, max) { return Math.floor(Math.random() * (max - min)) + min; };
// ? *********************************************************

// Link to DOM elements
const soccerElement = document.getElementById('soccer');
const filteredResult = [];

// Create Array
const teams = [
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

// Assign random values to keys
teams.forEach(team => {
    team.scoreDone = generateNumber(1, 80);
    team.sufferedFouls = generateNumber(1, 80);
});

// Filter result & create template string
for (let team of teams) {
    const { teamName, scoreDone, sufferedFouls } = team;
    if (team !== scoreDone) {
        filteredResult.push({ teamName, sufferedFouls });
        stringToInject += `<h1>${teamName}<h1>
        <h3>Falli subiti: ${sufferedFouls}<h3>`;
    }
}

// Display result in console
console.table(`Questo è filteredResult`);
console.table(filteredResult);

// Display result in DOM
soccerElement.innerHTML = stringToInject;