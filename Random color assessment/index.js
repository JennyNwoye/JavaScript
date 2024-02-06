const hexadecimalNumberSystem = [0,1,2,3,4,5,6,7,8,9,`A`,`B`,`C`,`D`,`E`,`F`]

let button = document.getElementById(`button`)

let firstColorBox = document.getElementById(`first-color-box`)
let secondColorBox = document.getElementById(`second-color-box`)
let thirdColorBox = document.getElementById(`third-color-box`)
let fourthColorBox = document.getElementById(`fourth-color-box`)

let firstHexCode = document.getElementById(`first-hex-code`)
let secondHexCode = document.getElementById(`second-hex-code`)
let thirdHexCode = document.getElementById(`third-hex-code`)
let fourthHexCode = document.getElementById(`fourth-hex-code`)


function generateRandomNumber(){
    let randomNumber = Math.floor(Math.random() * hexadecimalNumberSystem.length)
    return randomNumber
}

button.addEventListener(`click`, function(){

    let hexCode1 = `#`
    for(i=0; i<6; i++){
        hexCode1 += hexadecimalNumberSystem[generateRandomNumber()]
    }
    firstColorBox.style.backgroundColor = hexCode1
    firstHexCode.innerText = hexCode1
    
    let hexCode2 = `#`
    for(x=0; x<6; x++){
        hexCode2 += hexadecimalNumberSystem[generateRandomNumber()]
       
    }   
    secondColorBox.style.backgroundColor = hexCode2
    secondHexCode.innerText = hexCode2

    let hexCode3 = `#`
    for(k=0; k<6; k++){
        hexCode3 += hexadecimalNumberSystem[generateRandomNumber()]
    }
    thirdColorBox.style.backgroundColor = hexCode3
    thirdHexCode.innerText = hexCode3

    let hexCode4 = `#`
    for(l=0; l<6; l++){
        hexCode4 += hexadecimalNumberSystem[generateRandomNumber()]
    }
    fourthColorBox.style.backgroundColor = hexCode4
    fourthHexCode.innerText = hexCode4
})

let codeIcon = document.getElementById(`codeIcon`)
let firstRighticon = document.getElementById(`first-right-icon`)

firstColorBox.addEventListener(`click`, function(){
    if(firstRighticon.classList.contains(`edit-and-delete`)){
        firstRighticon.classList.remove(`edit-and-delete`)
        firstRighticon.classList.add(`edit-and-delete-new`)
        codeIcon.classList.remove(`code-icon`)
        codeIcon.classList.add(`code-icon-new`)
    }else if(firstRighticon.classList.contains(`edit-and-delete-new`)){
        firstRighticon.classList.remove(`edit-and-delete-new`)
        firstRighticon.classList.add(`edit-and-delete`)
        codeIcon.classList.remove(`code-icon-new`)
        codeIcon.classList.add(`code-icon`)
    }
})

let codeIcon1 = document.getElementById(`codeIcon2`)
let firstRighticon1 = document.getElementById(`first-right-icon2`)

secondColorBox.addEventListener(`click`, function(){
    if(firstRighticon1.classList.contains(`edit-and-delete`)){
        firstRighticon1.classList.remove(`edit-and-delete`)
        firstRighticon1.classList.add(`edit-and-delete-new`)
        codeIcon1.classList.remove(`code-icon`)
        codeIcon1.classList.add(`code-icon-new`)
    }else if(firstRighticon1.classList.contains(`edit-and-delete-new`)){
        firstRighticon1.classList.remove(`edit-and-delete-new`)
        firstRighticon1.classList.add(`edit-and-delete`)
        codeIcon1.classList.remove(`code-icon-new`)
        codeIcon1.classList.add(`code-icon`)
    }
})

let codeIcon2 = document.getElementById(`codeIcon3`)
let firstRighticon2 = document.getElementById(`first-right-icon3`)

thirdColorBox.addEventListener(`click`, function(){
    if(firstRighticon2.classList.contains(`edit-and-delete`)){
        firstRighticon2.classList.remove(`edit-and-delete`)
        firstRighticon2.classList.add(`edit-and-delete-new`)
        codeIcon2.classList.remove(`code-icon`)
        codeIcon2.classList.add(`code-icon-new`)
    }else if(firstRighticon2.classList.contains(`edit-and-delete-new`)){
        firstRighticon2.classList.remove(`edit-and-delete-new`)
        firstRighticon2.classList.add(`edit-and-delete`)
        codeIcon2.classList.remove(`code-icon-new`)
        codeIcon2.classList.add(`code-icon`)
    }
})

let codeIcon3 = document.getElementById(`codeIcon4`)
let firstRighticon3 = document.getElementById(`first-right-icon4`)

fourthColorBox.addEventListener(`click`, function(){
    if(firstRighticon3.classList.contains(`edit-and-delete`)){
        firstRighticon3.classList.remove(`edit-and-delete`)
        firstRighticon3.classList.add(`edit-and-delete-new`)
        codeIcon3.classList.remove(`code-icon`)
        codeIcon3.classList.add(`code-icon-new`)
    }else if(firstRighticon3.classList.contains(`edit-and-delete-new`)){
        firstRighticon3.classList.remove(`edit-and-delete-new`)
        firstRighticon3.classList.add(`edit-and-delete`)
        codeIcon3.classList.remove(`code-icon-new`)
        codeIcon3.classList.add(`code-icon`)
    }
})




























// function isDark(color){
//     let r = parseInt(color.substr(1,2),16);
//     let g = parseInt(color.substr(3,2),16);
//     let b= parseInt(color.substr(5,2),16);

//     let luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
//     return luminance < 128
// }

// function generateColor(){
//     let color = generateRandomNumber();
//     let textColor = isDark(color) ? `#ffffff` : `#000000`;

//     document.body.style.backgroundColor = color;
//     document.body.style.color = textColor;
//     document.getElementById(`colorHex`).textContent = color;
// }


// generateColor()