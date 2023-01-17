// const startTimeoutButton = document.getElementById("start-timeout");
// const timeoutDisplay = document.getElementById("timeout-display");
// const startIntervalButton = document.getElementById("start-interval");
// const intervalDisplay = document.getElementById("interval-display");
// let intervalTimer;



// //  Add a click event listener to the startTimeoutButton. Once the button is clicked, the textContent of the timeoutDisplay element is set to "Getting ready..."


// startTimeoutButton.addEventListener("click", function () {
//     timeoutDisplay.textContent = "Getting ready...";

//     //  create a setTimeout function that will run after 5 seconds, and change the textContent of timeoutDisplay to "READY!"

//     setTimeout(function () {
//         timeoutDisplay.textContent = "READY!";
//     }, 5000);

// });

// //  Add a click event listener to the startIntervalButton. Once the button is clicked, the count variable is set to 5 and the textContent of intervalDisplay is set to count.

// startIntervalButton.addEventListener("click", function () {
//     let count = 5;

//     intervalDisplay.textContent = count;


//     // Create a setInterval function that will run every second, decrement the count variable by 1, update the textContent of the intervalDisplay element to the new count, and check if count is less than 0. If it is, it will change the textContent of intervalDisplay to "GO!", clear the interval and call the startNestedInterval function

//     intervalTimer = setInterval(function () {
//         count--;
//         intervalDisplay.textContent = count;
//         if (count < 0) {
//             intervalDisplay.textContent = "GO!";
//             clearInterval(intervalTimer);
//             isCountedDown = true;
//             startNestedInterval();
//         }

//     }, 1000);
// });
// // This function declares a repeatGoArray variable, which is an array that holds all elements with the class "repeat-go". It also declares an index variable and sets its initial value to 0.

// startIntervalButton.addEventListener("click", function() {
//     let count = 5;
//     intervalDisplay.textContent = count;
//     const intervalTimer = setInterval(function() {
//         count--;
//         intervalDisplay.textContent = count;
//         if (count < 0) {
//             intervalDisplay.textContent = "GO!";
//             clearInterval(intervalTimer);
//             isCountedDown = true;
//         }
//     }, 1000);
// });

// if (isCountedDown) {
//     let repeatGoArray = [...document.getElementsByClassName("repeat-go")];
//     let index = 0;
//     let nestedIntervalTimer = setInterval(function() {
//         repeatGoArray[index].textContent = "GO!";
//         index++;
//         if (repeatGoArray[index] === undefined) {
//             clearInterval(nestedIntervalTimer);
//         }
//     }, 1000);
// }


// startIntervalButton.addEventListener("click", function() {
//     let count = 5;
//     intervalDisplay.textContent = count;
//     const intervalTimer = setInterval(function() {
//       count--;
//       intervalDisplay.textContent = count;
//       if (count < 0) {
//         intervalDisplay.textContent = "GO!";
//         clearInterval(intervalTimer);
//         if (isCountedDown) {
//             let repeatGoArray = [...document.getElementsByClassName("repeat-go")];
//             let index = 0;
//             let nestedIntervalTimer = setInterval(function() {
//               repeatGoArray[index].textContent = "GO!";
//               index++;
//               if (repeatGoArray[index] === undefined) {
//                 clearInterval(nestedIntervalTimer);
//               }
//             }, 1000);
//           }




// ! code explained............




// setTimeout(function () {
//     timeoutDisplay.textContent = "READY!";
// }, 5000);

// startTimeoutButton.addEventListener("click", function () {
//     timeoutDisplay.textContent = "Getting ready...";
// });

// startIntervalButton.addEventListener("click", function () {
//     let count = 5;
//     intervalDisplay.textContent = count;
// });

// intervalTimer = setInterval(function () {
//     count--;
//     intervalDisplay.textContent = count;
//     if (count < 0) {
//         intervalDisplay.textContent = "GO!";
//         clearInterval(intervalTimer);
//         startNestedInterval();
//     }
// }, 1000);


// function startNestedInterval() {
//     let repeatGoArray = [...document.querySelectorAll(".repeat-go")];
//     let index = 0;
// }

// let nestedIntervalTimer = setInterval(function () {
//     repeatGoArray[index].textContent = "GO!";
//     index++;
// });

const startTimeoutButton = document.getElementById("start-timeout");
const timeoutDisplay = document.getElementById("timeout-display");
const startIntervalButton = document.getElementById("start-interval");
const intervalDisplay = document.getElementById("interval-display");
let isCountedDown = false;

startTimeoutButton.addEventListener("click", function () {
    timeoutDisplay.textContent = "Getting ready...";
    setTimeout(function () {
        timeoutDisplay.textContent = "READY!";
    }, 5000); // 5 seconds
});

startIntervalButton.addEventListener("click", function () {
    let count = 5;
    intervalDisplay.textContent = count;
    const intervalTimer = setInterval(function () {
        count--;
        intervalDisplay.textContent = count;
        if (count < 0) {
            intervalDisplay.textContent = "GO!";
            clearInterval(intervalTimer);
            isCountedDown = true;

            let repeatGoArray = [...document.querySelectorAll(".repeat-go")];
            let index = 0;
            let nestedIntervalTimer = setInterval(function () {
                repeatGoArray[index].textContent = "GO!";
                index++;
                if (index === repeatGoArray.length) {
                    clearInterval(nestedIntervalTimer);
                }
            }, 1000);
        }
    }, 1000);
});

