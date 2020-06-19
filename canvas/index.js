// declare canvas
var myCanvas = document.getElementById("my-canvas");
console.log(myCanvas);
var context = myCanvas.getContext("2d");

// drawline
context.strokeStyle = "red";
context.moveTo(0, 0);
context.lineTo(200, 300);
context.stroke();

context.beginPath();
context.strokeStyle = "green";
context.moveTo(200, 0);
context.lineTo(0, 300);
context.stroke();

// draw rectangle
context.fillStyle = "yellow";
context.fillRect(0, 0, 100, 100);

// draw circle
context.beginPath();
context.arc(100, 150, 100, 0, Math.PI * 2);
context.stroke();

// draw text
context.fillStyle = "red"
context.font = "30px Arial";
context.fillText("Hello", 0, 30)

// draw image
window.onload = () => {
    var imgPlayer = document.getElementsByTagName("img")[0];
    context.drawImage(imgPlayer, 0, 0, 214, 256);
}