var input = prompt("Nhập mảng (VD:1,2,3,4,...", "1,2,3,2,3,4,6,7");

var array = input.split(',').map(function(item) {
    return parseInt(item, 10);
});
    	
var b = array.filter(n => {
    if (n === 1) {
        return false
    } else if(n === 2) {
            return true
    } else {
        for (var i = 2; i < n; i++) {
            if(n % i === 0) {
                return false
            }
        }
    }
    return true
});

document.write("Result: b = [" + b + "]");
console.log("b", b)