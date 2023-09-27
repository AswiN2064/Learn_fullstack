function randomNumber(){
    var numberRand = Math.random();
    numberRand = Math.floor(numberRand*6)+1;
    return numberRand;
}

var randomNumber1 = randomNumber();
var randomNumber2 = randomNumber();

var img1 =document.querySelector(".img1").setAttribute("src", "./images/dice"+randomNumber1+".png");
var img2 = document.querySelector(".img2").setAttribute("src", "./images/dice"+randomNumber2+".png");

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player1 Wins..!";
} 
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player2 Wins..!";
} 
else{
    document.querySelector("h1").innerHTML = "Draw";
}