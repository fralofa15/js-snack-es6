//Array di oggetti con nome e peso
const bici = [
    {
        nome: "Bicicletta 1", 
        peso: 7
    },
    {
        nome: "Bicicletta 2", 
        peso: 6
    },
    {
        nome: "Bicicletta 3", 
        peso: 12
    },
    {
        nome: "Bicicletta 4", 
        peso: 9
    }
];

let biciLeggera = bici[0];


//Ciclo for per trovare la bici più leggera
for (let i = 1; i < bici.length; i++) {
    console.log(bici[i]);
    
    //Controllo tramite IF quale bici ha il peso minore
    if (bici[i].peso < biciLeggera.peso) {
        //Se la nuova bici è più leggera aggiorno la variabile biciLeggera
        biciLeggera = bici[i]; 
    }
}

console.log(biciLeggera);
