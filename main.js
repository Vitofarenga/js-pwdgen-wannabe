// nome
let userName = prompt("inserisci il tuo nome");
console.log(userName);

document.getElementById("user-name").innerHTML = userName;

// cognome
let userSurName = prompt("inserisci il tuo cognome");
console.log(userSurName);

document.getElementById("user-surname").innerHTML = userSurName;

// colore preferito
let userFavColor = prompt("inserisci il tuo colore preferito");
console.log(userFavColor);

document.getElementById("user-fav-color").innerHTML = userFavColor;

// password
let PassWord = userName + userSurName + userFavColor + 22;
console.log(PassWord)
document.getElementById("user-password").innerHTML = PassWord;
