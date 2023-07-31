function myFunction() {
    const element = document.getElementById("id01");
    element.innerHTML = "Nowy nagłówek";
}

function myColorChange() {
    const element = document.getElementById("id01");
    element.style.color = "red";
}



// let wiek; // wiek uzytkownika
// let prawoJazdy; // czy uzytkownik posiada prawo jazdy?
// let wiadomosc;

// wiek = 20;
// prawoJazdy = true;

// if ( wiek >= 18 && prawoJazdy) {
//     wiadomosc = "Brawo, mozesz jezdzic samochodem!";
// } 
// else if (wiek < 18 && prawoJazdy === false) {
//     wiadomosc = "Nie masz prawa jazdy, i nie jestes penoletni!"
// } 
// else if (prawoJazdy === false) {
//     wiadomosc = "Brak prawa jazdy!";
// } 
// else if (wiek < 18){
//     wiadomosc = "Jestes niepelnoletni!";
// }
// console.log(wiadomosc);


// let wiek = 15

// if ( wiek < 18 ) {
//     wiadomosc = "A";
// } 
// if ( wiek < 25 ) {
//     wiadomosc = "B"
// } 
// if (wiek > 18 && wiek >= 25) {
//     wiadomosc = "Jestes pelnoletni i mozesz byc prezydentem";
// } 
// console.log(wiadomosc);


/////////////////////////////////////////////////////////////////////////////////////////////////// PETLE


// let counter = 0;

// while (counter <= 20) {
//   console.log("counter: ", counter);
//   counter += 2;
// }



// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }




// let password = "";

// do {
//   password = prompt("Wprowadź hasło dłuższe niż 4 znaki", "");
// } while (password.length < 5);

// console.log("Hasło zostało wprowadzone: ", password);



////////////////////////////////////////////////////////////////////////////////////////////FOR 



// for (let i = 0; i <= 20; i += 5) {
//     console.log(i);
// }



// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);




// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }


////////////////////////////////////////////////////////////////////////////////////////////////////////////// BREAK


// for (let i = 0; i <= 5; i += 1) {
//     console.log(i);
  
//     if (i === 3) {
//       console.log("Znaleźliśmy numer, przerywamy wykonywanie cyklu");
//       break;
//     }
//   }
  
//   console.log("Log po cyklu");



////////////////////////////////////////////////////////////////////////////////////////////////////////////// CONTINUE


// const number = 10;

// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log("Nieparzyste i: ", i); // 1, 3, 5, 7, 9
// }


////////////////////////////////////////////////////////////////////////////////////////////////////////////// TABLICE


// const clients = ["Mango", "Poly", "Ajax"];


// const clients = ["Patryk", "Adam", "Krzys"];
// console.log(clients[0]); 
// console.log(clients[1]); 
// console.log(clients[2]); 


// const clients = ["Patryk", "Adam", "Krzys"];
// clients[0] = "Kiwi";
// clients[1] = "Banan";
// console.log(clients);


// const clients = ["Patryk", "Adam", "Krzys"];
// console.log(clients.length);


// const clients = ["Patryk", "Adam", "Krzys"];
// const lastElementIndex = clients.length - 1;
// console.log(lastElementIndex); // 2
// console.log(clients[lastElementIndex]);


////////////////////////////////////////////////////////////////////////////////////////////////////////////// TABLICE ITERACJE


// const clients = ["Patryk", "Adam", "Krzys"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }


// const clients = ["Patryk", "Adam", "Krzys"];
// for (const client of clients) {
//   console.log(client);
// }
// const string = "javascript";
// for (const character of string) {
//   console.log(character);
// }


// const clients = ["Patryk", "Adam", "Krzys"];
// const clientNameToFind = "Adam";
// let message;
// for (const client of clients) {
//   // W każdej iteracji sprawdzamy, czy element tablicy jest podobny
//   // do imienia klienta. Jeśli wszystko się zgadza, wtedy zapiszmy w message
//   // wiadomość o sukcesie i zróbmy break, aby przerwać poszukiwanie
//   if (client === clientNameToFind) {
//     message = "Klient z takim imieniem jest w bazie danych!";
//     break;
//   }
//   // Jeśli nie znajdziemy podobieństw, to zapiszmy do message wiadomość o braku imienia
//   message = "Nie znaleźliśmy takiego klienta w bazie danych!";
// }
// console.log(message); // "Klient z takim imieniem jest w bazie danych!"


// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const wyznacznik = 15;
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < wyznacznik) {
//     continue;
//   }
//   console.log(`Liczba większa niż ${wyznacznik}: ${numbers[i]}`); // 18, 29, 34
// }

////////////////////////////////////////////////////////////////////////////////////////////////////// METODY TABLICOWE


// const napis = "Napis";
// console.log(napis.split("")); 
// const message = "JavaScript jest ciekawy";
// console.log(message.split(" ")); 


// const words = ["JavaScript", "jest", "ciekawy"];
// console.log(words.join(""));
// console.log(words.join(" ")); 
// console.log(words.join("-"));


// const clients = ["Mango", "Jablko", "Banan", "Kiwi"];
// console.log(clients.indexOf("Jablko"));
// console.log(clients.indexOf("Mariola")); 


// const clients = ["Mango", "Jablko", "Banan", "Kiwi"];
// console.log(clients.includes("Banan"));
// console.log(clients.includes("Mariola"));


// const fruit = "apple";
// if (fruit === "apple" || fruit === "strawberry") {
//   console.log("It is a red fruit!");
// }


// const fruit = "apple";
// if (
//   fruit === "apple" ||
//   fruit === "strawberry" ||
//   fruit === "cherry" ||
//   fruit === "cranberries"
// ) {
//   console.log("It is a red fruit!");
// }


// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "cherry";
// const hasFruit = redFruits.includes(fruit);
// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }

