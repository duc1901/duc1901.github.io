function nextBiggest(arr) {
    let max = -Infinity, result = -Infinity;
  
    for (const value of arr) {
      const nr = Number(value)
  
      if (nr > max) {
        [result, max] = [max, nr]
      } else if (nr < max && nr > result) {
        result = nr;
      }
    }
  
    return result;
  }

var input = prompt("Nhập mảng", "1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1");

var arr = input.split(',').map(function(item) {
    return parseInt(item, 10);
});

if (nextBiggest(arr) == -Infinity) {
    document.write("Result: -1")
} else {
    document.write("Result: " + nextBiggest(arr))
}