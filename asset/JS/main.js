/* Snack 1: Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine. */

/*
var zucchina = [

    {
        varieta: 'milano',
        peso: 1,
        lunghezza: 15,
    },
    {
        varieta: 'como,
        peso: 13,
        lunghezza: 25,
    },
    {
        varieta: 'piacenza',
        peso: 3,
        lunghezza: 11,
    },
    {
        varieta: 'napoli',
        peso: 7,
        lunghezza: 19,
    },
    {
        varieta: 'ferrara',
        peso: 1.5,
        lunghezza: 35,
    },
    {
        varieta: 'terragni',
        peso: 9,
        lunghezza: 43,
    },
    {
        varieta: 'nazionale',
        peso: 6,
        lunghezza: 15,
    },
    {
        varieta: 'estera',
        peso: 1,
        lunghezza: 5,
    },
    {
        varieta: 'papera',
        peso: 3.2,
        lunghezza: 68,
    },
    {
        varieta: 'piemonte',
        peso: 7,
        lunghezza: 29,
    },

];
var pesoTotale = 0;
for (var key in zucchina) {
    pesoTotale += zucchina[key]['peso'];
};

console.log(pesoTotale);

*/

/*
Snack 2:
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine.

*/

/*
var zucchina = [

    {
        varieta: 'milano',
        peso: 1,
        lunghezza: 15,
    },
    {
        varieta: 'como',
        peso: 13,
        lunghezza: 25,
    },
    {
        varieta: 'piacenza',
        peso: 3,
        lunghezza: 11,
    },
    {
        varieta: 'napoli',
        peso: 7,
        lunghezza: 9,
    },
    {
        varieta: 'ferrara',
        peso: 1.5,
        lunghezza: 35,
    },
    {
        varieta: 'terragni',
        peso: 9,
        lunghezza: 43,
    },
    {
        varieta: 'nazionale',
        peso: 6,
        lunghezza: 15,
    },
    {
        varieta: 'estera',
        peso: 1,
        lunghezza: 5,
    },
    {
        varieta: 'papera',
        peso: 3.2,
        lunghezza: 6,
    },
    {
        varieta: 'piemonte',
        peso: 7,
        lunghezza: 29,
    },

];


// CREO LE DUE MATRICI IN CUI SMISTARE LE ZUCCHINE
var A = [];
var B = [];

for (var key in zucchina) {
    var x = zucchina[key]['lunghezza'];
    if (x < 15) {
        A.push(x);
    } else {
        B.push(x);
    }
};

console.log(A);
console.log(B);

// stampo il peso dei due gruppi.

var lightEl = document.getElementById('light');
var heavyEl = document.getElementById('heavy');

var pesoA = 0;
for (var i = 0; i < A.length; i++) {
    pesoA += +A[i];
};

lightEl.innerHTML = `Il gruppo di zucchine di lunghezza <15 cm  pesa: ${pesoA} Kg `;




var pesoB = 0;
for (var i = 0; i < B.length; i++) {
    pesoB += +B[i];
};

heavyEl.innerHTML = `Il gruppo di zucchine di lunghezza >15 cm  pesa: ${pesoB} Kg `;
*/



/*
Snack 3:
Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)
*/

/*
function reverseFunction(text) {
    var risultato = text.split('').reverse().join('');
    return risultato;

}

console.log(reverseFunction("ciao"));

*/

/*
Snack 4:
Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
*/

/*
var listA = ['a', 'n', 'd', 'r', 'e', 'a'];
var listB = [14, 07, 1994, 186, 92, 1];

if (listA.length == listB.length) {
    var listC = [];
    for (var i = 0; i < listB.length; i++) {
        listC.push(listA[i]), listC.push(listB[i]);
    };
} else {
    alert('inserire lo stesso numero di elementi nelle due matrici');
};


console.log(listC);

*/

/*
Snack 5:
Scrivi una funzione che accetti tre argomenti:
un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b”
*/

var list = [1, 'a', 'c', 2, 3, 4, 5, 7, 9, 10, 'f', 'op'];

console.log(list);

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

var b = randomNumber(1, list.length);
console.log("Numero maggiore: " + b);
var a = randomNumber(0, b);
if (a >= b) {
    a = b - 1;
}

console.log("Numero minore: " + a);


function newArray(array, num1, num2) {
    var l = array.length;
    var newArray = array.splice(num1, num2 - num1);
    return newArray;
};

console.log(newArray(list, a, b));