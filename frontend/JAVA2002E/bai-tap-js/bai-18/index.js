function findPos(s1, s2){
    return s1.slice(0,s1.lastIndexOf(s2)).lastIndexOf(s2)
}

var t1 = prompt("Enter text 1: ", "hi hi hi hi hi");
var t2 = prompt("Enter text 2: ", "hi");
document.write("Input: " + t1 + " | " + t2 + "<br/>");
document.write("Result: " + findPos(t1, t2));