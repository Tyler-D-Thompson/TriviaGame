// let count = 15;
// var timer = setInterval(function () {
//   console.log(count);
//   count--;
//   if (count === 0) {
//       stopInterval()
//   }  
// }, 1000);

// var stopInterval = function () {
//     alert("Time is Up!");
//     clearInterval(timer);
// }

var count = 50;
var interval = setInterval(function () {
    document.getElementById('count').innerHTML = count;
    count--;
    console.log("count");

    if (count === 0) {
        clearInterval(interval);
        document.getElementById('count').innerHTML = 'Done';
        alert("Your out of time!");
    }
}, 1000)

function check() {

}

var firstQuestion = document.quiz.firstQuestion.value;

var secondQuestion = document.quiz.secondQuestion.value;

var thirdQuestion = document.quiz.thirdQuestion.value;

var fourthQuestion = document.quiz.fourthQuestion.value;

var correct = 0;

if (firstQuestion == "option3") {
    correct++
    console.log(option3);
    
};

if (secondQuetion == "option1") {
    correct++
}

if (thirdQuestion == "option3")  {
    correct++
}

if (fourthQuestion == "option4") {
    correct++
}



document.getElementById("afterSubmit").style.visibility = "visible";

document.getElementById("numberCorrect").innerHTML = correct + "correct.";