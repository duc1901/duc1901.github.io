function find(s1,s2){
    return s1.indexOf(s2);
}
var s1 = prompt("Enter s1");
var s2 = prompt("Enter s2");
document.write("s1: " + s1 + "<br/>");
document.write("s2: " + s2 + "<br/>");
document.write("Result: " + find(s1, s2));