console.log('**************************** BIKES SCRIPT ****************************');

// * PHASE 1
// Link DOM elements
const bikeElement = document.getElementById('bikes');

// Create Bikes array
const bikes = [
    {
        name: 'Atala',
        weight: 10
    },
    {
        name: 'Bianchi',
        weight: 8
    },
    {
        name: 'Carrera',
        weight: 15
    },
    {
        name: 'Lombardo',
        weight: 12
    },
    {
        name: 'Cipollini',
        weight: 14
    }
];

// Create vars
let lighterBike = [];
let bikesWeight = 10000;
let toInject = '';

