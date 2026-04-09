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
}