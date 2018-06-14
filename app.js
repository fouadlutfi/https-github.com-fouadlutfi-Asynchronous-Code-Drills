
        function numberOne() {
    console.log('i love tacos')
    return 1;
}

function timeTravel() {
    number = number * 9;
    console.log('i love tacos');
}

let number = numberOne()

setTimeout(() => {
    timeTravel();
}, 2000);




function getWords() {
    console.log('Word 1');
    setTimeout(() => {
        console.log('Word 2');
    }, 2000);
    console.log('Word 3');
    console.log('Word 4');
}

getWords();

function countdown(num, callback) {
    setTimeout(() => {
        return callback();
    }, num         );
          };

function done() {
    console.log('Done');
}

countdown(2000, done);



let globalVar = true;

function orderingChickenSandwich(object) {
    return new Promise((resolve, reject) => {
        if (globalVar === true) {
            let object = {
                sandwich: "chicken",
                veggies: "lettuce"
            }
            resolve(object);
        } else {
            let err = new Error('No chicken sandwich, its not my Pleasure');
            reject(err);
        }
    })
}

function orderFood() {
    orderingChickenSandwich()
        .then((object) => {
            console.log(object);
        }).catch((err) => {
            console.log(err);
        });
};

orderFood()



function newPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        }, 2000);
    })
}

function returnNumber() {
    newPromise()
        .then((result) => {
            console.log(result);
            return result * 2;
            console.log(result);
        }).then((result) => {
            console.log(result);
            return result * 4;
        }).then((result) => {
            console.log(result);
            return result * 6;
        }).then((result) => {
            console.log(result);
        })
};

returnNumber();