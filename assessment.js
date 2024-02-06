// // Filter method assessment : Create a database of 10 students objects and filter all the students that have their score above 75.
// const tenStudentsRecord = [
//     {
//         studentName : `Danielle`,
//         studentGrade : `Grade 2`,
//         studentScore : 44
//     },
//     {
//         studentName : `Mich`,
//         studentGrade : `Grade 3`,
//         studentScore : 45
//     },
//     {
//         studentName : `Fisayomi`,
//         studentGrade : `Grade 4`,
//         studentScore : 20
//     },
//     {
//         studentName : `Martins`,
//         studentGrade : `Grade 5`,
//         studentScore : 16
//     },
//     {
//         studentName : `Patrick`,
//         studentGrade : `Grade 9`,
//         studentScore : 32
//     },
//     {
//         studentName : `Frank`,
//         studentGrade : `Grade 9`,
//         studentScore : 82
//     },
//     {
//         studentName : `Zoba`,
//         studentGrade : `Grade 8`,
//         studentScore : 90
//     },
//     {
//         studentName : `Manny`,
//         studentGrade : `Grade 7`,
//         studentScore : 22
//     },
//     {
//         studentName : `Randy`,
//         studentGrade : `Grade 6`,
//         studentScore : 32
//     },
// ]
// const filteredStudents = tenStudentsRecord.filter(function(records){
//     return records.studentScore > 75
// })


// VANILLA JS ASSESSMENT

// let card = document.createElement(`div`)
// card.classList.add(`card`)

// let cardTitle = document.createElement(`div`)
// cardTitle.classList.add(`card-title-container`)
// let cardHeading = document.createElement(`h5`)
// cardHeading.textContent = `Card Title`
// cardTitle.append(cardHeading)

// let cardParagraph = document.createElement(`div`)
// cardParagraph.classList.add(`card-body-container`)
// let paragraph = document.createElement(`p`)
// paragraph.textContent = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae perspiciatis quod corrupti esse sequi dolor debitis at quasi, itaque consequatur temporibus. Non, rem impedit!`
// cardParagraph.append(paragraph)

// let cardButton = document.createElement(`div`)
// cardButton.classList.add(`card-cta-container`)
// let button = document.createElement(`button`)
// button.textContent = `Learn More`
// cardButton.append(button)

// card.append(cardTitle, cardParagraph, cardButton)
// document.querySelector(`body`).append(card)


// EVENTS IN JAVASCRIPT(Listening in event)
// AddEventListener is a method used to tell a particular element to listen to something. After using this method, open a parenthesis, indicate the event to be done(eg is click) then put an anonymous function. Inside the function, you put anthing you want the button to do.

// Event object keeps all the record of the event. This object can be used to trace bugs
// The `event` parameter is storing the event object

// let myBtn = document.getElementById(`button`)
// myBtn.addEventListener(`click`, function(event){
//     console.log(event);
//     if(event.ctrlKey);
// })

// Another example
// let paragraph = document.getElementById(`paragraph`)
// let myBtn = document.getElementById(`button`)

// myBtn.addEventListener(`click`, function(event){
//     myBtn.innerHTML = `Text changed`
//     paragraph.innerHTML = `This changed to Joseph Brendan`
//     console.log(event)
//     let myTarget = event.target
//     console.log(myTarget)
// })


// USING EVENT TO RENDER A TEMPLATE
// A user tries to add a record to their spreadsheet

// let addButton = document.getElementById(`button`)
// let deleteButton = document.getElementById(`delete`)
// let input = document.getElementById(`text`)

// addButton.addEventListener(`click`, function(){
//     input.style.display = `inline`
//     deleteButton.style.display = `inline`
//     addButton.innerHTML = `Add`
// })

// deleteButton.addEventListener(`click`, function(){
    
//     input.style.display = `none`
//     deleteButton.style.display = `none`
//     input.style.transitionDelay =`transition all 1s`
//     addButton.innerHTML = `Added`
// })


// ADD ITEM ASSIGNMENT
// let addButton = document.getElementById(`top-button`)
// let firstText = document.getElementById(`first-text`)
// let secondText = document.getElementById(`second-text`)

// addButton.addEventListener(`click`, function(){
//     firstText.style.display = `inline`
//     addButton.innerHTML = `Add another field`
//     addButton.addEventListener(`click`, function(){
//         secondText.style.display = `inline`
//         addButton.innerHTML = `Submit`
//         addButton.addEventListener(`click`,function(){
//             addButton.style.display = `none`
//         })
//     })
// })




















// addButton.style.display = `none`