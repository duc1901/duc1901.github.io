function checkNum(array,k) {
    for ( var i = 0 ; i<array.length ; i++)
    for (var j = i+1 ; j<array.length;j++)
        for (var g = j+1;g<array.length;g++)
            if(array[i]+array[j]+array[g]===k)
                return true;
                return false;

}

var input = prompt("Nhập mảng", "1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1");
var k = Number(prompt("k?", "26"))

var array = input.split(',').map(function(item) {
    return parseInt(item, 10);
});

if (checkNum(array, k) == true ) {
    document.write("Result: YES")
} else {
    document.write("Result: NO")
}

