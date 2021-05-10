/* Snack 1: Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine. */


var zucchina = [

    {
        varieta: 'milano',
        peso: 1,
        lunghezza: 15,
    },
    {
        varieta: 'milano',
        peso: 1,
        lunghezza: 15,
    },
    {
        varieta: 'milano',
        peso: 1,
        lunghezza: 15,
    },
    {
        varieta: 'milano',
        peso: 1,
        lunghezza: 15,
    },
    {
        varieta: 'milano',
        peso: 1,
        lunghezza: 15,
    },
    {
        varieta: 'milano',
        peso: 1,
        lunghezza: 15,
    },
    {
        varieta: 'milano',
        peso: 1,
        lunghezza: 15,
    },
    {
        varieta: 'milano',
        peso: 1,
        lunghezza: 15,
    },
    {
        varieta: 'milano',
        peso: 1,
        lunghezza: 15,
    },
    {
        varieta: 'milano',
        peso: 1,
        lunghezza: 15,
    },

];
var pesoTotale = 0;
for (var key in zucchina) {
    pesoTotale += zucchina[key]['peso'];
};

console.log(pesoTotale);