let message = document.querySelector("#message");

let inputDate = document.querySelector("#input_date");
let inputNumber = document.querySelector("#input_number");
let checkButton = document.querySelector("#check_button");



checkButton.addEventListener("click", () => {
    console.log("inside cehcknumner");
    console.log("inputDate : ", inputDate.value);
    console.log("inputNumber  : ", inputNumber.value);

    let date = inputDate.value;
    let num = inputNumber.value;
    let sum = 0;

    for (let i = 0; i < date.length; ++i) {
        if (date[i] == '/' || date[i] == '-') {
            continue;
        } else {
            sum = sum + Number(date[i]);
        }
    }
    console.log("sum : " + sum);
    if (sum % num == 0) {
        message.innerHTML = num + " is a lucky number !! 🥳 🥳 🥳";
    } else {

        message.innerHTML = num + " is not that lucky 😕";
    }


});