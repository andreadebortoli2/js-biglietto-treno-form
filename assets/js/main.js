// console.log(`Hi`);

// -ask and set as variables:

//         -user name
const userName = document.getElementById(`user_name`).value;
// console.log(userName);

//         -travel length
const travelLength = Number(document.getElementById(`travel_length`).value);
// console.log(travelLength);

//         -user age
const userAge = document.getElementById(`user_age`).value;
// console.log(userAge);

//-show variable in console at the click

const submitBtn = document.querySelector(`button`);

submitBtn.addEventListener(`click`, function() {
    console.log(userName, travelLength, userAge)
});

//     -calculate travel price

const kmPrice = 0.21;

const rawPrice = travelLength * kmPrice;

//     -and show on console.log()

submitBtn.addEventListener(`click`, function() {
    console.log(rawPrice)
});

//     -apply discounts
            // -set discount variables:
            //     -junior -20%
const discountJunior = rawPrice * 0.2;
            //     -senior -40%
const discountSenior = rawPrice * 0.4;
            //     -standard none

if (userAge == `junior`) {
    console.log(rawPrice - discountJunior)
} else if (userAge == `senior`) {
    console.log(rawPrice - discountSenior)
};

//     -show results on console.log()