// DOM Manipulation
// This can be selected using tag name, class name(.), ID(#) or query selector(.querySelector / .querySelectorAll)

// let result = document.getElementsByTagName("#myTagElement")
// result.style.color = "#f1f1f1"

// To manipulate the text content of an elememt
// let result = document.getElementsByTagName("#myTagElement")
// result.textContent = `Registered`

// To manipulate the inner text of an elememt
// let result = document.getElementsByTagName("#myTagElement")
// result.innerText = `Registered`

// To change the content of HTML tag to something else(eg - is to change from an heading tag to a button tag)
// let result = document.getElementsByTagName("#myTagElement")
// result.innerHTML = `<button>Click here</button>`

// DAY 43
// To change the style of a weather
// let weatheText = document.getElementsByTagName("#myWeather")
// weatherText.style.color = "green"

// Eg 1 - To check for paid users
// let paidUsers = true
// if(paidUsers){
//     paidUsers.textContent("You are a paid user")
// }else{
//     paidUsers.textContent("You didm't pay")
// }

// Eg 2 -
// let age = 10
// if(age >= 10){
//     age.textContent("You are a paid user")
// }else{
//     age.textContent("You didm't pay")
// }

// Eg 3 - To add a username text while logging in
// let nameText = document.getElementsByTagName("#myFullName")
// nameText.textContent += "Nwoye Jennifer"
// The result of this will be - Username : nwoye Jennifer

// Getting and setting attributes
// 1. Get Attribute
// let button = document.getElementById(`#ourButton`)
// let gottenAttribute = button.getAttribute(`class`)
// console.log(gottenAttribute)

// 2. Set Attribute
// let settingAttribute = document.getElementsByTagName(`#ourButton`)
// let newAttribute = button.setAttribute(`class`, `Jenny-buttons`)

// To make a button change from black to red when a user clicks on it and to make the text change from register to registered
// let buttons = document.getElementsByTagName(`ourButtons`)
// button.addEventListener(`click`, function(){
//     buttons.setAttribute(`class`, `jenny-buttons`)
//     buttons.textContent(`Registered`)
// })



// MORE ON DOM MANIPULATION

// directing js to move from a child element to a parent (.parentElement)
// let myButton = document.getElementById(`button`)
// let myParent = myButton.parentElement
// console.log(myParent)

// from parent element to access  children elememt(.children)
// let myContainer = document.getElementById(`container`)
// let allChildren = myContainer.children
// console.log(allChildren)

// For parent to have access to all the children but only work with one of the children(the first index)
// let myContainer = document.getElementById(`container`)
// let allChildren = myContainer.children
// console.log(allChildren[1])

// For javascript to have access to the sibling(child element that is staying in a parent element with other child element). CHILDREN is about ELEMENT
// 1. previous element sibling
// let myButton = document.getElementById(`button`)
// let previousSibling = myButton.previousElementSibling
// console.log(previousSibling)

// 2.next element sibling
// let myHeading = document.getElementById(`heading`)
// let also = myHeading.nextElementSibling
// console.log(also)
// Note that to get a next element when nothing is there, it will give a null value

// To get the first element child from the parent
// let myContainer = document.getElementById(`container`)
// let firstChild = myContainer.firstElementChild
// console.log(firstChild)

// To have access to the last element child from the parent contaiener
// let myObject = document.getElementById(`container`)
// let lastChild = myObject.lastElementChild
// console.log(lastChild)


// NODES - they are basically elements and identations. CHILD is about NODES. The most used case for nodes is when you want to have access to everything in a container
// let myChild = document.getElementById(`container`)
// let childNode = myChild.childNodes
// console.log(childNode)

// To get the first child in a node. Not that this is not necessary going to be an element
// let myContainer = document.getElementById(`container`)
// let firstChild = myContainer.firstChild
// console.log(firstChild)


// TO REMOVE ELEMENT IN AN HTML ELEMENT WITHOUT DELETING FROM THE HTML FILE
// Remove Method : .remove()
// let myContainer = document.getElementById(`container`)
// let removeChild = myContainer.lastElementChild.remove()
// console.log(removeChild)


// TO CREATE DYNAMIC HTML USING JAVASCRIPT(.createElement()). Creating this element means that it has not existed before - First, reference document element

// let myDiv = document.createElement("div")
// myDiv.setAttribute("class", "my-new-div")
// myDiv.setAttribute("id", "my-new-div")
// myDiv.innerHTML = `<p>This is a paragraph text</p>`
// console.log(myDiv)


// APPEND PROPERTY(This is taking the elements and append it to the parent container)
// let htmlContainer = document.getElementById(`text-container`)

// let myDiv = document.createElement("div")
// myDiv.setAttribute("class", "my-new-div")
// myDiv.setAttribute("id", "my-new-div")
// myDiv.innerHTML = `<p>This is a paragraph text</p>`
// myDiv.style.fontSize = `40px`
// console.log(myDiv)

// htmlContainer.append(myDiv)


// DAY 45
// Giving HTML class names and ID names
// let myContainer = document.getElementById(`container`)

// let myElement = document.createElement(`div`)
// myElement.setAttribute(`class`, `my-class`)
// myElement.setAttribute(`id`, `my-class`)
// myElement.innerHTML = `<h1> This is a heading </h1>`

// let newElement = document.createElement(`button`)
// newElement.innerText = `create button`

// myContainer.append(myElement, newElement)

// To remove the button element
// newElement.remove()

// To remove class and ID attribute(.removeAttribute())
// 1. To remove class
// myElement.removeAttribute(`class`)

// 2. To remove ID
// myElement.removeAttribute(`id`)



// CLASS LIST PROPERTY (To add a class to an element)
// Allows us to interact with clases of an elememmtand access the clss property of an element

// let container = document.getElementById(`container`)

// let myElement = document.createElement("div")
// myElement.classList.add(`Jenny`)
// myElement.classList.add(`Jen`)
// myElement.classList.add(`Dammy`)
// myElement.classList.remove(`Jenny`)

// The add method will allow me to add a class to the element instantly
// Then to remove the class name

// THE CONTAIN METHOD(.contains)- Used to vhaeck if an elememt contains a particular element
// let test = myElement.classList.contains(`Jen`)
// console.log(test)

// using arguement
// if(myElement.classList.contains(`Jen`)){
//     let myButton = document.createElement(`button`)
//     myButton.innerHTML = `Create account button`
//     container.append(myButton)
// }else{
//     console.log(`this is a test`)
// }

// TOGGLE - Another class list method
// This will add a class name if the name was not there and will remove a class name if it was there before. It is just like a toggle button
// myElement.classList.toggle(`Jen`)


// container.append(myElement)



// EVENTS IN JAVASCRIPT(Listening in event)
// AddEventListener is a method used to tell a particular element to listen to something. After using this method, open a parenthesis, indicate the event to be done(eg is click) then put an anonymous function. Inside the function, you put anthing you want the button to do.

// Event object keeps all the record of the event. This object can be used to trace bugs
// The `event` parameter is storing the event object

let myBtn = document.getElementById(`button`)
myBtn.addEventListener(`click`, function(event){
    console.log(`event`)
})