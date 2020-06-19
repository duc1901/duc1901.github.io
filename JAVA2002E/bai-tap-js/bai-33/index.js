function sort(array){
    if (array.length < 2) return array
    const [p, ...rest] = array
    const low  = rest.filter(n => n <= p)
    const high = rest.filter(n => n > p)
    return [...sort(low), p, ...sort(high)]
}

var input = prompt("Nhập mảng", "9,8,7,6,4,5,3,2,1");

var array = input.split(',').map(function(item) {
    return parseInt(item, 10);
});

document.write("Result: " + sort(array))