console.log('JS OK')

// PHASE 1
// Crate vars and arrays
const tableName = 'Tavolo Vip';
const vipsName = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];


// Create complete array
const invited = vipsName.map((vip, index) => {
    return {
        table: tableName,
        name: vip,
        reservation: index + 1
    }
});

// Display result in console
console.table(invited);