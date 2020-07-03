function greeting() {
    console.log("Hello")
}

function say(greeting) {
    greeting()
}

say(greeting)

// callback

// function cooking() {
//     console.log("Thinking.....?")
//     setTimeout(() => {
//         console.log("Done thinking");
//         console.log("Cooking rice");
//         setTimeout(() => {
//             console.log("Cooking rice done!")
//             console.log("Start cooking fish")
//             setTimeout(() => {
//                 console.log("Cooking fish done!")
//                 console.log("Start cooking soup")
//                 setTimeout(() => {
//                     console.log("Cooking soup done!")
//                 }, 2000)
//             }, 2000)
//         }, 3000)
//     }, 2000)
// }

// cooking()
// console.log("Main thread")

// Promise
var goodStudent = true
var goodBoy = true
var buyCarCallback = (resolve, reject) => {
    setTimeout(() => {
        if (goodStudent) {
            resolve({ name: "Vinfast"})
        } else {
            reject({ reason: "Not good student"})
        }
    }, 2000)
};

var hangoutCallback = (resolve, reject) => {
    setTimeout(() => {
        if (goodBoy) {
            resolve({ name: "Hangout"})
        } else {
            reject({ reason: "Failed"})
        }
    }, 3000)
};

var buyCarPromise = new Promise(buyCarCallback);

// buyCarPromise
    // .then((data) => {
    //     console.log("Bought car: ", data.name)
    //     var hangoutPromise = new Promise(hangoutCallback);
    //     goodBoy = true;
    //     hangoutPromise.then(() => {
    //         console.log("Have a girl friend")
    //     }).catch(() => {
    //         console.log("Failed!")
    //     })
    // }).catch((data) => {
    //     console.log("Reject: ", data.reason)
    // })


// async, await

async function myPromise() {
    var buyCarResolve = await new Promise(buyCarCallback)
    console.log("buy car done")
    var hangoutResolve = await new Promise(hangoutCallback)
    console.log("hangout done")
    console.log("All done: ", buyCarResolve, hangoutResolve)
    // buyCarPromise.then(() => {
    //     console.log("buyCarPromise: ", buyCarPromise)
    // })
    // console.log("HangoutPromise....")
}

myPromise()
console.log("My Main Thread")