// console.log(`Hi`);

// -ask and set as variables:

//         -user name
const userName = document.getElementById(`user_name`);
// console.log(userName.value);

//         -travel length
const travelLength = document.getElementById("travel_length");
// console.log(travelLength.value);

//         -user age
const userAge = document.getElementById(`user_age`);
// console.log(userAge.value);



//-show variable in console at the click

const submitBtn = document.querySelector(`button`);

submitBtn.addEventListener(`click`, function() {
    console.log(userName.value, travelLength.value, userAge.value);
});



//     -calculate travel price

// const travelLengthValue = travelLength.value

// const kmPrice = 0.21

// const rawPrice = kmPrice * travelLengthValue


//     -and show on console.log()

// console.log(rawPrice);


//     -apply discounts setting a final price variable
            // -set discount variables:
            //     -junior -20%
// const discountJunior = rawPrice * 0.2;
            //     -senior -40%
// const discountSenior = rawPrice * 0.4;
            //     -standard none

// const discountJunior = rawPrice * 0.2;

// const discountSenior = rawPrice * 0.4;
            
// let finalPrice

// if (userAge.value == `junior`) {
//     finalPrice = rawPrice - discountJunior
// } else if (userAge.value == `senior`) {
//     finalPrice = rawPrice - discountSenior
// } else {
//     finalPrice = rawPrice
// }


//     -show results on console.log()

// console.log(finalPrice);



submitBtn.addEventListener(`click`, function(){

const travelLengthValue = travelLength.value

const kmPrice = 0.21

const rawPrice = kmPrice * travelLengthValue

const discountJunior = rawPrice * 0.2;

const discountSenior = rawPrice * 0.4;

let finalPrice

if (userAge.value == `junior`) {
    finalPrice = rawPrice - discountJunior
} else if (userAge.value == `senior`) {
    finalPrice = rawPrice - discountSenior
} else {
    finalPrice = rawPrice
}

    console.log(finalPrice.toFixed(2));
})


// --MILKESTONE 1--