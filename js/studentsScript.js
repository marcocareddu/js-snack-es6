console.log('**************************** STUDENT SCRIPT ****************************');

// PHASE 1
// Crate vars and arrays
const students = [
    {
        id: 213,
        name: `Marco della Rovere`,
        grade: 78
    },
    {
        id: 110,
        name: `Paola Cortellessa`,
        grade: 96
    },
    {
        id: 250,
        name: `Andrea Mantegna`,
        grade: 48
    },
    {
        id: 145,
        name: `Gaia Borromini`,
        grade: 74
    },
    {
        id: 196,
        name: `Luigi Grimaldello`,
        grade: 68
    },
    {
        id: 102,
        name: `Piero della Francesca`,
        grade: 50
    },
    {
        id: 120,
        name: `Francesca da Polenta`,
        grade: 84
    }

];

// Create arrays with Grades over 70 
const over70 = students.filter(student => student.grade > 70);

// Create arrays with Grades over 70 and ID over 120
const over70And120 = students.filter(student => (student.grade > 70 && student.id > 120));

// Create array with uppercase names
const upperCaseName = students.map(student => {
    return student.name.toUpperCase();
});


// Print in console
console.table('----------------- GRADE OVER 70 -----------------');
console.table(over70);

console.table('----------------- GRADE OVER 70 AND ID OVER 120 -----------------');
console.table(over70And120);

console.table('----------------- UPPERCASE NAME -----------------');
console.log(upperCaseName);