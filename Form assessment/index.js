let fullNameInput = document.getElementById(`fullname`)
let emailInput = document.getElementById(`email`)
let phoneNumberInput = document.getElementById(`phonenumber`)
let passwordInput = document.getElementById(`password`)

let fullNameAlert = document.getElementById(`enter-fullname-alert`)
let emailAlert = document.getElementById(`enter-email-alert`)
let phoneNumberAlert = document.getElementById(`enter-phonenumber-alert`)
let passwordAlert = document.getElementById(`enter-password-alert`)

let button = document.getElementById(`button`)
let checkBox = document.getElementById(`checkbox`)
let crossCheck = document.getElementById(`crossCheck`)
let eyeIcon = document.getElementById(`eyeIcon`)

function validateFullName(){
    let fullName = fullNameInput.value
    if(fullName.length == 0){
        fullNameAlert.innerText = `Please enter a valid name`
        fullNameInput.style.outline = `1px solid red`
        fullNameInput.style.border = `none`
    }else if(!fullName.match(/^[^0-9]+$/)){
        fullNameAlert.innerText = `Please enter a valid name`
        fullNameInput.style.outline = `1px solid red`
        fullNameInput.style.border = `none`
    }else{
        fullNameAlert.innerText = ` `
        fullNameInput.style.outline = `1px solid green`
        fullNameInput.style.border = `none`
    }
}

fullNameAlert.addEventListener(`keyup`, function(){
    validateFullName()
})

function validateEmail(){
    let email = emailInput.value
    if(email.length == 0){
        emailAlert.innerText = `Please enter a valid email`
        emailInput.style.outline = ` 1px solid red`
        emailInput.style.border = `none`
    }else if(!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
        emailAlert.innerText = `Incorrect email`
        emailInput.style.outline = ` 1px solid red`
        emailInput.style.border = `none`
    }else{
        emailAlert.innerText = ` `
        emailInput.style.outline = ` 1px solid green`
        emailInput.style.border = `none`
    }
}

emailInput.addEventListener(`keyup`, function(){
    validateEmail()
})

function validatePhoneNumber(){
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
    validatePhoneNumber()
})

function validatePassword(){
    let password = passwordInput.length
    if(password == 0 || password < 8 || password > 12){
        passwordAlert.innerText = `Your password should be more than 8 or greater than 12 alphabets.`
        passwordInput.style.outline = `1px solid red`
        passwordInput.style.outline = `none`
    }else if(!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])``          [A-Za-z\d@$!%*?&]{8,}$/)){
        passwordAlert.innerText = `Password not accepted `
        passwordInput.style.outline = `1px solid red`
        passwordInput.style.outline = `none`
    }else{
        passwordAlert.innerText = ` `
        passwordInput.style.outline = `1px solid green`
        passwordInput.style.outline = `none`
    }
}

passwordInput.addEventListener(`keyup`, function(){
    validatePassword()
})

function buttonValidation(){
    if(!validateFullName() || validateEmail() || validatePhoneNumber() || validatePassword())
    crossCheck.innerText = `Ensure your details are correct!`
}

button.addEventListener(`click`, function(){
    buttonValidation()
})