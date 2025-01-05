// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 
// stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// Stampo i numeri fino da 1 a 100
for (let i=1; i<=100; i++){
// Controllo che il numero sia multiplo sia di 3 che di 5 e stampo FizzBuzz
if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
}
// Controllo che il numero sia multiplo di 3 e stampo Fizz
else if (i % 3 === 0){
    console.log("Fizz");
}
// Controllo che il numero sia multiplo di 5 e stampo Buzz
else if (i % 5 === 0){
    console.log("Buzz");
}
// Se il numero non è multimplo nè di 3 nè di 5 stampo il suo valore e basta
else {
    console.log(i);
}
}



