let fullNameInput = document.getElementById(`fullname`)
let emailInput = document.getElementById(`email`)
let phoneNumberInput = document.getElementById(`phonenumber`)

let fullNameAlert = document.getElementById(`enter-fullname-alert`)
let emailAlert = document.getElementById(`enter-email-alert`)
let phoneNumberAlert = document.getElementById(`enter-phonenumber-alert`)

let button = document.getElementById(`button`)
let check = document.getElementById(`check`)

// function validateFullName(){
//     let fullName = fullNameInput.value
//     if(fullName.length == 0){
//         fullNameAlert.innerText = `Enter Full Name please`
//         fullNameInput.style.border = `none`
//         fullNameInput.style.outline = `1px solid red`
//     }else{
//         fullNameAlert.innerText = ` `
//         fullNameInput.style.outline = `1px solid green`
//         fullNameInput.style.border = `none`
//     }
// }

function validateFullNameInput(){
    let fullName = fullNameInput.value
    if(fullName.length == 0){
        fullNameAlert.innerText = `Please Enter a Full Name`
        fullNameInput.style.border = `none`
        fullNameInput.style.outline = `1px solid red`
    }else if(!fullName.match(/^[^0-9]+$/)){
        fullNameAlert.innerText = `You can't enter numbers in your name`
        fullNameInput.style.border = `none`
        fullNameInput.style.outline = `1px solid red`
    }else{
        fullNameAlert.innerText = ``
        fullNameInput.style.outline = `1px solid green`
        fullNameInput.style.border = `none`
    }
}
fullNameInput.addEventListener(`keyup`, function(){
    validateFullNameInput()
})

// .value grabs whatever value that the user writes in the input
// chatgpt = give me a js regular expression to check that a user does not enter numbers 

function validateEmailInput(){
    let email= emailInput.value
    if(email.length == 0){
        emailAlert.innerText = `Please enter a valid email`
        emailInput.style.border = `none`
        emailInput.style.outline = `1px solid red`
    }else if(!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
        emailAlert.innerText = `You can't enter numbers in your email`
        emailInput.style.border = `none`
        emailInput.style.outline = `1px solid red`
    }else{
        emailAlert.innerText = ``
        emailInput.style.outline = `1px solid green`
        emailInput.style.border = `none`
    }
}
emailInput.addEventListener(`keyup`, function(){
    validateEmailInput()
})

function validatePhoneNumberInput(){
    let phoneNumber = phoneNumberInput.value
    if(phoneNumber == 0){
        phoneNumberAlert.innerText = `Phone number must be 11 digits`
        phoneNumberInput.style.border = `none`
        phoneNumberInput.style.outline = `1px solid red`
    }else{
        phoneNumberAlert.innerText = ``
        phoneNumberInput.style.outline = `1px solid green`
        phoneNumberInput.style.border = `none`
    }
    
}
phoneNumberInput.addEventListener(`keyup`,function(){
    validatePhoneNumberInput()
})

function submitButtonValidation(){
    if(!validateEmailInput() || !validateFullNameInput() || !validatePhoneNumberInput()){
        check.innerText = `Please crosscheck`
    }
}
button.addEventListener(`click`, function(){
    submitButtonValidation()
})