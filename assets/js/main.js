// console.log(`Hi`);

// -ask and set as variables:

//         -user name
const userName = document.getElementById(`user_name`).value;
// console.log(userName);

//         -travel length
const travelLength = document.getElementById(`travel_length`).value;
// console.log(travelLength);

//         -user age
const userAge = document.getElementById(`user_age`).value;
// console.log(userAge);

//-show variable in console at the click

const submitBtn = document.querySelector(`button`)

submitBtn.addEventListener(`click`, function() {
    console.log(userName, travelLength, userAge);
})

//     -calculate travel price



//     -apply discounts
//     -show results on console.log()