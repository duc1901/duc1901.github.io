function test_prime() {
    var n, flag;
    n = document.myform.n.value
    if (n===1) {
        flag = false;
    } else if(n === 2) {
        flag = true;
    } else {
        for (var i = 2; i < n; i++) {
            if(n % i === 0) {
                flag = false;
            }
        }
    flag = true;
    }
    if (flag == true) {
        document.getElementById("result").innerHTML = n + " is Prime";
    } else if (flag == false) {
        document.getElementById("result").innerHTML = n + " is not Prime";
    }
}



