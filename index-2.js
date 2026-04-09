//Array di oggetti con nome punti e falli
const teams = [
    {
        nome: "Juventus",
        punti: 0,
        falli: 0
    },
    {
        nome: "Roma",
        punti: 0,
        falli: 0
    },
    {
        nome: "Milan",
        punti: 0,
        falli: 0
    },
    {
        nome: "Inter",
        punti: 0,
        falli: 0
    },
    {
        nome: "Fiorentina",
        punti: 0,
        falli: 0
    },
    {
        nome: "Lazio",
        punti: 0,
        falli: 0
    },
    {
        nome: "Napoli",
        punti: 0,
        falli: 0
    }
];

//Funzione per generare numeri random
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

//Ciclo FOR per generare numeri random per i punti e per i falli
for (let i = 0; i < teams.length; i++) {
    teams[i].punti = getRandomNumber(1, 90);
    teams[i].falli = getRandomNumber(1, 30);
};

//Nuovo array per nome e falli
const nomiPiuFalli = [];

//Ciclo FOR per inserire nome e falli nel nuovo array
for (let i = 0; i < teams.length; i++) {
    nomiPiuFalli.push({
        nome: teams[i].nome,
        falli: teams[i].falli
    });
}

console.log(nomiPiuFalli);