function properCase(str) {
    return str.toLowerCase().split(" ").map(function(word) {
      return word.replace(word[0], word[0].toUpperCase());
    }).join(" ");
}
var input = prompt("Nhập họ tên:");
document.write("Gốc: " + input + "<br/>");
document.write("Sau: " + properCase(input));