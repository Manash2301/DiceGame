var randomNumber1 = Math.floor(Math.random()*6)+1;

var imgPicker = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", imgPicker);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if (randomNumber1>randomNumber2){
    document.getElementById("big").innerHTML="🚩 Player 1 wins!"
}
else if(randomNumber1<randomNumber2){
    document.getElementById("big").innerHTML="Player 2 wins! 🚩"
}
else{
    document.getElementById("big").innerHTML="Draw!";
}