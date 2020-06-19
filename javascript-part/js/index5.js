var numbers = [1, 6, 3, 5, 8]

// find the first even mumber
function findNumber(value) {
    if(value % 2 == 0) {
        return true;
    }
    return false
}
var foundNumber = numbers.find(findNumber)
console.log(foundNumber)

// filter all even number
var evenNumbers = numbers.filter((value) => {
    return value % 2 == 0
})

console.log("evenNumbers: ", evenNumbers)

// map, reduce, concat, sort

var thai = {
    id: 1,
    firstName: "Luu Quang",
    lastName: "Thai",
    class: "JAVA"
}
var chinh = {
    id: 2,
    firstName: "Nguyen Tien",
    lastName: "Chinh",
    class: "JAVA"
}
var thuong = {
    id: 3,
    firstName: "Nguyen Thi Thu",
    lastName: "Thuong",
    class: "JAVA"
}

var students = [
    thai,
    chinh,
    thuong,
]

console.log("students: ", students)

var newStudents = students.map((student) => {
    // var newStudents = new Object(students)
    return {...student,
        fullName: student.firstName + " " + student.lastName
    }
    // return newStudents
    // return {
    //     id: students.id,
    //     fullName: students.firstName + " " + students.lastName,
    //     firstName: students.firstName,
    //     lastName: students.lastName,
    //     class: students.class
    // }
})

console.log("newStudents: ", newStudents)
numbers.push(8)
numbers.unshift(2)
console.log("Numbers: ", numbers)
// reduce
var result = numbers.reduce((previousTotal, value) => {
    if(value % 2 === 0) {
        var total = previousTotal + value;
        console.log(previousTotal, value, total);
        return total
    }
    return previousTotal
        // var total = previousTotal + value;
        // console.log(previousTotal, value, total);
        // return total
}, 0)

console.log(result)


// soft

var studentsName = ["thuong", "huyen", "khoi", "dung", "hien"]
// var sortStudentsName = studentsName.sort()
var sortStudentsName = studentsName.sort((a, b) => {
    if (a > b) {
        return -1
    } else if (a < b) {
        return 1
    }
    return 0
})
console.log("sortStudentsName: ", sortStudentsName)

numbers.push(20)
var sortNumbers = numbers.sort((a, b) => {
    return a - b
})
console.log("sortNumbers: ", sortNumbers)
console.log("Concat: ", sortNumbers.concat(sortNumbers))

// sort list student
console.log("students: ", students)
var sortStudents = students.sort((s1, s2) => {
    if (s1.lastName > s2.lastName) {
        return 1
    } else if (s1.lastName < s2.lastName) {
        return -1
    }
    return 0
})

console.log("sortStudents: ", sortStudents)

// object
var car = {
    name: "Vinfast",
    model: "2020",
    weight: 900,
    start: function() {
        console.log(this.name + " starting...")
    }
}
var car2 = {
    name: "Vinfast",
    model: "2018"
}
var car3 = {
    name: "Vinfast",
    weight: 1000
}

function updateCar(car, prop, value) {
    car[prop] = value
}

updateCar(car, "name", "Vinfast2")
updateCar(car, "model", "2020")
console.log("CARRRR", car)

car.country = "Vietnam"
car.stop = function() {
    console.log(this.name + " stopping...")
}

console.log("car name: ", car.name, car["name"], car.country)
car.start()
car.stop()

function prinObj(obj) {
    for (var prop in obj) {
        if (typeof obj[prop] !== "function") {
            console.log(prop)
            console.log("prop: ", prop, ", data: ", obj[prop])
        } else [
            obj[prop]()
        ]
    }
}

prinObj(car)
prinObj(thai)

// function object
function Car(year, weight, model) {
    this.year = year;
    this.weight = weight;
    this.model = model
    this.start = function() {
        console.log(this.model + " starting...")
    }
}

var myCar = new Car("2020", 850, "Phone")
var myCar2 = new Car("2021", 950, "IPhone")
console.log(myCar)
console.log(myCar2)

myCar.start()
var car2Start = myCar2.start.bind(this)
car2Start()
myCar2.start()