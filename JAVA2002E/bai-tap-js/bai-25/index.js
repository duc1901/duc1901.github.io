var input = prompt("Nhập mảng (VD:1,2,3,4,...", "1,2,3,2,3,4,6,7");

var array = input.split(',').map(function(item) {
    return parseInt(item, 10);
});
    	
var b = array.map(n => Math.pow(n, 2));

document.write("Result: b = [" + b + "]");
console.log("b", b)