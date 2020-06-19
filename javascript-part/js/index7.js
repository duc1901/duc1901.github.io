function loadData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // document.getElementById("demo").innerHTML =
        // this.responseText;
        console.log(this.responseText)
      }
    };
    xhttp.open("GET", "https://5e8e421f22d8cd0016a7a062.mockapi.io/api/v1/users", true);
    xhttp.send();
}

// loadData()

// fetch('https://5e8e421f22d8cd0016a7a062.mockapi.io/api/v1/users')
//     .then(response => response.json())
//     .then(data => console.log(data))


// class
class Person {
    constructor(lastName, firstName) {
        // this.name = name;
        this.lastName = lastName;
        this.firstName = firstName;
        this.name = firstName + " " + lastName
        this.go = this.go.bind(this)
    }

    go = () => {
        console.log(this.name + " is going...")
    }
}

var person = new Person("Thuong", "Nguyen Thi");
var person2 = new Person("Thai", "Nguyen Van");
console.log("Person: ", person)
person.go()
console.log("Go function: ", person.go)

console.log("Person2: ", person2)
person2.go()

// var gogo = person.go.bind(person);
// gogo()

function someoneGoing(go) {
    // some another tasks...
    go()
}
someoneGoing(person.go)

class Doctor extends Person {
    constructor(lastName, firstName, degree) {
        super(lastName, firstName)
        this.degree = degree
    }
}

class Developer extends Person {
    constructor(lastName, firstName, language) {
        super(lastName, firstName)
        this.language = language
    }
}

class Hacker extends Person {
    constructor(lastName, firstName, language, hat) {
        super(lastName, firstName)
        this.language = language
        this.hat = hat
    }
}

var doctor = new Doctor("Chinh", "Nguyen Tien", "Dentist")
console.log("doctor: ", doctor)
var developer = new Developer("Dat", "Nguyen Van", ["html", "css", "java", "javascript"])
console.log("developer: ", developer)
var hacker = new Hacker("Dung", "Nguyen Thi", ["html", "css", "java", "javascript"])
console.log("hacker: ", hacker)
hacker.go()

// advance
let x = 5;
x = 6;
console.log("x: ", x)

{
    var y = 5;
    let z = 6;
    console.log("z: ", z)
}

console.log("y: ", y)
// console.log("z: ", z)