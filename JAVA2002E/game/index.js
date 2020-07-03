var game = document.getElementById("game"),
    ctx = game.getContext("2d"),
    width = game.getAttribute('width'),
    height = game.getAttribute('height');

var bgImage = new Image(),
    logoImage = new Image(),
    startImage = new Image(),
    creditImage = new Image();

bgImage.src = "image/bg.jpg";
logoImage.src = "image/logo.png";
startImage.src = "image/start.png";
creditImage.src = "image/credit.png";

var buttonX = [195,187];
var buttonY = [320,370];
// var buttonWidth = [50,160];
// var buttonHeight = [40,40];

bgImage.onload = function() {
ctx.drawImage(bgImage, 0, 0, 500, 500)
}
logoImage.onload = function() {
    ctx.drawImage(logoImage, 77, 80);
}
startImage.onload = function() {
    ctx.drawImage(startImage, buttonX[0], buttonY[0], 110.4, 40);
}
creditImage.onload = function(){ 
    ctx.drawImage(creditImage, buttonX[1], buttonY[1], 128, 40);
}

