// function generalTemperature(){
//     let normal = 30
//     let highFever = 50
//     let veryHighFever = 70
//     let urgetAttention = 100

//     let patientTemperature = window.prompt("Enter your temperature")
//     patientTemperature = Number(patientTemperature)

//     if(patientTemperature <= normal){
//         console.log("Normal Temperature")
//     }else if(patientTemperature > normal && patientTemperature <= highFever){
//         console.log("You have high fever")
//     }else if(patientTemperature > highFever && patientTemperature <= veryHighFever){
//         console.log("You have very high fever")
//     }else if(patientTemperature > veryHighFever && patientTemperature <= urgetAttention){
//         console.log("You need urgent attention")
//     }else{
//         console.log('You need to rest')
//     }
// }

// generalTemperature()


// function myFullName(userName){
//     console.log(`Your name is ${userName}`)
// }

// myFullName("Nwoye Jennifer")
// myFullName("David Joseph")
// myFullName("Martin Danielle")



// function nameAndLocation(fullName, location){
//     console.log(fullName === "Jennifer" && location === "Awka")
// }



// function christmasWear(userName){
//     userName = "jenny"
//     console.log(`Hello, my name is ${userName} and i'm here.` )
// }
// christmasWear()

// function calculateTotalPrice(rice,beans) {
//     let totalPrice = rice + beans
//     console.log(totalPrice)
// }

// calculateTotalPrice(400, 20)


// function cookingIngredients(inredient1, ingredient2, ingredient3, ingredient4){
//     let ingredientDisplay = `The ingredients used are ${inredient1}, ${ingredient2}, ${ingredient3} and ${ingredient4}`
//     console.log(ingredientDisplay)
// }

// cookingIngredients("salt, meat, maggi, pepper")
// cookingIngredients("pepper, fish, yam, tomatoes")



// let cash = 100
// let debit  = 200

// let outcome = cash === debit ? console.log("spend") : console.log("Don't spend")
// console.log(outcome)


// FUNCTION PARAMETERS

// ONE
// function houseNumberChecker(streetName, houseColor){
//     if(streetName === "Anderson" && houseColor === "Blue"){
//         console.log("Your house number is 10")
//     }else{
//         console.log("You dont have a house number")
//     }
// }
// houseNumberChecker("Anderson", "Blue")
// houseNumberChecker("Brenden", "Red")
// houseNumberChecker("Blue", "Anderson")

// // TWO
// function printMyName(userName){
//     console.log(`My name is ${userName}`)
// }
// printMyName("Joseph")
// printMyName("Danielle")

// function christmasWisher(personName = "Jenny"){
//     console.log(`Hello ${personName}, I wish you a merry Chirstmas.`)
// }
// christmasWisher()
// console.log(typeof christmasWisher)

// // THREE
// function sellerOmo(sellerName){
//     sellerName = "MummyAishat"
//     console.log(`Hello, my name is ${sellerName}`)
// }
// sellerOmo()

// // ANOTHER
// function calculatTotalPrice(itemPrice1, itemPrice2){
//     let totalPrice = itemPrice1 + itemPrice1
//     console.log(totalPrice)
// }
// calculatTotalPrice(400,20)
// calculatTotalPrice(700,10)
// calculatTotalPrice(100,80)

// function cookingRice(recepie1, recepie2, recepie3, recepie4){
//     let recepieDisplay = `The recepie used by this cook are ${recepie1}, ${recepie2}, ${recepie3}, ${recepie4}`
//     console.log(recepieDisplay)
// }
// cookingRice("oil", "tomatoes", "meat", "salt")
// cookingRice("beans", "rice", "fish", "noodles")


// // RETURN STATEMENTS

// function datafunction(){
//     let firstVariable = "First Variable"
//     let secondVariable = "Second variable"
//     let firstNumber = 450

//     return firstNumber
// }
// datafunction()

// function averageScoreCalculator(score1, score2, score3){
//     let average = (score1 + score2 + score3) / 3
//     let averageForTwoScores = (score1 + score2) / 2
//     let studentName = "Jamil"
//     let sentence = `Hello ${studentName}, your average score is ${average}`

//     return console.log(sentence)
// }
// averageScoreCalculator(15,2,7)


// OBJECT LITERALS
// let patient1 = {
//     name : `Jenny`,
//     gender : `Female`,
//     bodyTemperature : 40,
//     height : 50,
//     bloodPressure : 21,
//     heartBeat : 500

// }
// let patientDetails = patient1.bodyTemperature 
// console.log(patientDetails)

// // EDIT IN OBJECT LITERALS
// let studentAttendance = {
//     studentName : `jenny`,
//     studentNumber : 45,
//     studentClass : `Grade 12`,
// }

// let newStudentNumber = window.prompt(`Enter your number`)
// newStudentNumber = Number(newStudentNumber)
// studentAttendance.studentNumber = newStudentNumber
// let show = studentAttendance.studentNumber
// console.log(show)

// // DELETE IN OBJECT LITERALS
// delete studentAttendance.studentClass
// console.log(studentAttendance)

// NESTING IN OBJECT LITERALS

// let studentLaptopDetails = {
//     studentName : `jenny`,
//     studentNumber : 45,
//     studentClasss : `Grade 10`,
//     StudentResumed : true,
//     studentLaptop : {
//         laptopColor : `Red`,
//         laptopSize : 16,
//         laptopName : `Macbook 2e023`
//     }
// }
// let studentVar = studentLaptopDetails.studentLaptop.laptopColor
// console.log(studentVar)

// let firstMalariaPatient = {
//     patientName : "Esther",
//     patientAge : 21,
//     patientContact : +234123456789,
//     patientMedicalHistory : "Diagonized",
//     patientSymptoms : "Symptomatic",
//     symptomsDuration : "Two weeks",
//     symptoms : {
//         fever : true,
//         stooling : false,
//         muscleAche : true,
//         sweating : true,
//     }
// }

// let patientVar = firstMalariaPatient.symptoms.muscleAche
// console.log(patientVar)


// let newPatientAge = window.prompt("Enter new age")
// firstMalariaPatient.patientAge = newPatientAge
// newPatientAge = Number(newPatientAge)

// let showw = firstMalariaPatient.patientAge
// console.log(showw)


// delete firstMalariaPatient.patientSymptoms
// console.log(firstMalariaPatient)


// let studentAssessmentAverage = {
//     studentName : "Jenny",
//     studentNumber : 56,
//     studentClass : "Grade 12",
//     firstAssessmentscore : 20,
//     secondAssessmentscore : 20,
//     secondAssessmentscore : 20,
// }


// Combining object literal using spread operator

// let userBankDetails = {
//     userName : "Jenny",
//     bankVerificationID : 739037,
//     isAccountActive : true
// }
// console.log(userBankDetails)

// let internationalPassportDetails = {
//     userName : "Anthony",
//     passportNumber : 749209378,
//     isPassportExpired : false
// }
// console.log(internationalPassportDetails)

// let objectCombination = {
//     ...userBankDetails,
//     ...internationalPassportDetails
// }
// console.log(objectCombination)

// combining variable in object literals
// let studentName = "Marylin"
// let studentAge = 32
// let studentID = 74839

// let studentDetails = {
//     studentName,
//     studentAge,
//     studentID,
//     stduentBio : function(){
//         let sentence = `The student name is ${this.studentName}, their age is ${this.studentAge}, their studentID is ${this.studentID}.`
//         return sentence
//     }
// }
// console.log(studentDetails)


// destructuring
// let userRecord = {
//     fullName : "Jenny",
//     userEmail : "Jenny@gmail.com",
//     userPhoneNumber : 28376493
// }
// let { userEmail } = userRecord

// let transactionHistory = {
//     userID : 8909,
//     transactionAmount : 100,
//     transactionBalance : 788
// }
// let { transactionAmount:amount, transactionBalance:balance } = transactionHistory


// ARRAYS

// let listOfForeignCountries = [
//     "Ghana",
//     "Nigeria",
//     "Canada",
//     "Togo"
// ]
// console.log(listOfForeignCountries)


// PRACTICE
// 1. COMBINING OL IN SPREAD OPERATOR
// let userPersonalDetails = {
//     surName : "Nwoye",
//     firstName : "Jenny",
//     lastName : "Sommy",
//     userAge : 16
// }
// console.log(userPersonalDetails)

// let userClassDetails = {
//     faculty : "Biosciences",
//     department : "Applied Microbiology And Brewing",
//     numberOfCoursesOffered : 9,
//     previousCarryOver : false
// }
// console.log(userClassDetails)

// let ObjectLiteralCombination = {
//     ...userPersonalDetails,
//     ...userClassDetails
// }
// console.log(ObjectLiteralCombination)

// // 2. COMBINING VARIABLES IN OBJECT LITERALS

// let patientName = "Makinde"
// let patientID = 12
// let patientWardNumber = "Ward2"
// let surgeryType = "Amputation"

// let patientInformation = {
//     patientName,
//     patientID,
//     patientWardNumber,
//     surgeryType,
//     patientBio : function(){
//         let sentence = `The patient name is ${this.patientName},the ID is ${this.patientID} and the patient ward number is ${patientWardNumber}`
//         return console.log(statement) 
//     }
// }
// console.log(patientInformation)



// // 3. DESTRUCTURING
// let userRecord = {
//     fullName : "Joseph",
//     userEmail : "joe@gmail.com",
//     userPhoneNumber : 378483584
// }
// let { userEmail:email } = userRecord
// console.log(email)

// let transactionHistory = {
//     userID : 24,
//     transactionAmount : 100,
//     transactionBalance : 30
// }
// let {transactionAmount:amount, transactionBalance:balance} = transactionHistory
// console.log(amount)

// function accountStatement (){
//     let sentence = `The user with the email ${email} has the amount ${amount} and the balance ${balance}`
//     return console.log(sentence)
// }
// accountStatement()

// const numbers = [
//     10,
//     20,
//     30,
//     40,
//     50,
//     60
// ]

// let checkNumber = numbers.includes(66)
// console.log(checkNumber)


// OBJECTS IN ARRAY

// const userRecordArray = [
//     {
//         fullName : "Jenny",
//         emailAddress : "nwoyejenny11@",
//         password : "JeNN"
//     },

//     {
//         fullName : "Angela",
//         emailAddress : "angy@angy.com",
//         password : 124
//     },

//     {
//         fullName : "Esthy",
//         emailAddress : "esth2",
//         password : "12jen"
//     }
// ]
// console.log(userRecordArray[2].emailAddress)


// // IndexOf
// let indexArray = numbers.splice(1,4)
// console.log(indexArray)

// // slice
// let slicedArray = numbers.slice(2)
// console.log(slicedArray)

// // splice
// let spliceArray = numbers.splice(1,1)
// console.log(spliceArray)


// let firstArray = [10,20,30,40]
// let secondArray = [50,60,70,80]

// let nestedArray = [
//     firstArray,
//     secondArray
// ]

// let nestedResult = nestedArray[1][3]
// console.log(nestedResult)

// // merge array

// let mergeArray = [ ...firstArray, ...secondArray]
// console.log(mergeArray)

// // flat
// let oneArray = [
//     10,
//     "Jenny"
//     [10, 3, "Jen"]
// ]
// console.log(oneArray)

// // objects in array
// const userRecordArray = [
//     {
//         fullname : "Jenny",
//         age : 12,
//         accountBalane : 5000
//     },

//     {
//         fullname : "Joseph",
//         age : 17,
//         accountBalane : 2000
//     },

//     {
//         fullname : "Esther",
//         age : 20,
//         accountBalane : 1000
//     }
// ]
// let accessArray = userRecordArray[2]
// console.log(accessArray)


// math object
// let myNumber = 10.65
// let long = Math.round(myNumber)
// console.log(Math)

// pow method
// let power = 2
// let long = Math.pow(power, 3)
// console.log(long)


// min or method
// let player1 = 13
// let player2 = 78
// let player3 = 90
// let player4 = 11

// let minScore = Math.max(player1, player2,player3, player4)
// console.log(minScore)

// random method
// let totalRandom = Math.floor(Math.random() * 2000) + 4000
// console.log(totalRandom)


// DAILY AFFIRMATIONS
// let affirmationArray = [
//     `I am Blessed`,
//     `I am intelligent`,
//     `I am God's owm`,
//     `I will achieve everything I set my heart to achieve`,
//     `With God, all things are possible`
// ]

// function affirmationFunction(affirmaions){
//     let affirmationSentence = Math.floor(Math.random() * affirmationArray.length)
//     let dailyAffirmations = affirmaions[affirmationSentence]
//     return dailyAffirmations
// }

// console.log(affirmationFunction(affirmationArray))


// TYPE COERCION (JavaScript engine coercing a variable to pick a particular data type. Note that it is the sign that will tell javascript what to do)

// Rule 1 - Here, string plus number results to STRING
// let number1 = 10
// let myName = `10`
// let sumNumber = number1 + myName
// console.log(typeof sumNumber)

// // Rule 2 - Here, string minus number results to NUMBER
// let number1 = 10
// let myName = `1`
// let sumNumber = number1 - myName
// console.log(typeof sumNumber)


// SCOPE
// 1. Global scope - Can be easily accessible and very porous making it prone to attacks.
// 2. Function scope - Usually inside a function and cannot be accessed outside the function.
// 3. Block scope - This is anything that is inbetween two curly bracket.
// 4. Nested scope - This is usually nested in a function. Note that the parent can be called from inside the child function but the child function cannot be accessed from the parent.

// NESTED SCOPE
// function myNestFunction (){
//     let myName = `Nwoye Jennifer`
//     let myCity = `Lagos State`

//     function nestedFunction (){
//         console.log(myName)
//     }
//     nestedFunction()
// }
// myNestFunction()


// ARROW FUNCTIONS (=>)
// const arrowFunction = number =>{
//     let result = 10 * number
//     return result
// } 
// console.log(arrowFunction(2))

// or you can do it this way
// const arrowFunction = number => 10 * number
// console.log(arrowFunction(2))


// To calculate the maximum score using arrow function
// const minimumScore = (score1, score2, score3) =>{
//     let minScore = Math.max(score1, score2, score3)
//     return minScore
// }
// console.log(minimumScore(32,12,6))


// LOOPS
// 1. FOR LOOPS

// EG 1: to check the number and contents in an array
// const loppedArray = [`Mum`, `Dad`, `Sis`]
// for(let i=0; i<10; i++){
//     let newLoop = loppedArray[i]
// }
// console.log(loppedArray)

// EG 2: To fetch the twitter ID of three twitter users
// const twitterUsers = [
//     {
//         userName : `Jenny`,
//         twitterID : 298,
//         tweet : `I am a girl`
//     },

//     {
//         userName : `Triad`,
//         twitterID : 456,
//         tweet : `Thank you Lord`
//     },

//     {
//         userName : `Benny`,
//         twitterID : 32,
//         tweet : `To God be the glory`
//     },

//     {
//         userName : `Simeon`,
//         twitterID : 29,
//         tweet : `I will be rich to the glory of God`
//     }
// ]
// for (i=0; i<twitterUsers.length; i++){
//     let allLength = twitterUsers[i]
//     let twitterIDs = allLength.twitterID
//     console.log(twitterIDs)
// }

// EG 3: To calculate multiplication table
// for (i=1; i<11; i++){
//     console.log(`MULTIPLICATION TABLE FOR NUMEBERS ${i}`)

//     for (let x = 1; x <= 10; x++){
//         let multiplier = `${i} X ${x} = ${i * x}`
//         console.log(multiplier)
//     }
// }

// i = 1
// x = 1,2,3,4,5,6,7,8,9,10

// i = 2
// x = 1,2,3,4,5,6,7,8,9,10

// i = 3
// x = 1,2,3,4,5,6,7,8,9,10

// i = 4
// x = 1,2,3,4,5,6,7,8,9,10

// i = 5
// x = 1,2,3,4,5,6,7,8,9,10


// WHILE LOOPS
// let's extract all the items individually

// const arrayofNames = ["Jenny", "Joseph", `Andy`, `Samuel`]
// let i = 0

// while (i < arrayofNames.length){
//     let names = arrayofNames[i]
//     i++
//     console.log(names)
// }

// Another example using temperature
// let temperature = 40
// while(temperature <=30){
//     console.log(`Temperature is low`)
//     temperature++
// }
// console.log(`Temperature is high`)

// Another example using shopping list

// const shoppingListArray = [ ]
// let initial = true;
// while(initial){
//     let shoppingItems = window.prompt(`Enter you shopping items and type DONE wnen done`);

//     if(shoppingItems.toLowerCase()===`done`){
//         initial=false;
//     }else{
//         shoppingListArray.push(shoppingItems);
//         console.log(`Something is added to your list`);
//     }
// }
// console.log(`Here is your shopping list : ${shoppingListArray}`)

// WHILE NESTED LOOP
// 1.  AND CONTINUE STATEMENT IN WHILE LOOP

// let i = 0
// while(i<10){
//     i++
//     if(i===6){
//         console.log(`Loop continue`)
//         continue
//     }else{
//         console.log(i)
//     }
// }

// Do-while Loop
// let i=2
// do{
//     console.log(`This is a do-while loop ${i}`)
//     i++
// }while(i<20)

// FOR-OF LOOP
// const studentsName = [`Jen`, `Esthy`, `Danielle`]
// for(let variable of studentsName){
//     console.log(variable)
// }

// Using FOR-OF loop over an array of an object
// const studentProfile = [
//     {
//         studentName : `Jenoy`,
//         studentID : 24
//     },

//     {
//         studentName : `Cassie`,
//         studentID : 10
//     },

//     {
//         studentName : `Mathins`,
//         studentID : 66
//     }
// ]
// for(let studentDetails of studentProfile){
//     console.log(studentDetails)
// }

// NESTED FOR-OF Loop
// const numb = [1,2,3,4,5]
// const numbers = [1,2,3,4,5,6,7,8,9]
// for(let myNumb of numb){
//     for(let myNumbers of numbers){
//     console.log(myNumbers)
//     }
// }
// console.log(myNumb)

// Multiplication table using FOR-OF Loops
// const theNumbers = [1,2,3,4,5,6,7,8,9]
// for(let numb of theNumbers){
//     for(let numbers of theNumbers){
//         let result = numb * numbers

//         console.log(`${numb} * ${numbers} = ${result}`)
//     }
    
// }

// // FOR-IN LOOP - used mainly for object literals
// const personBio = {
//     fullName : `Jenny baby`,
//     country : `Nigeria`,
//     age : 21
// }

// for (let key in personBio){
//     console.log(key, personBio[key])
// }

// // FOR-EACH-LOOP-METHOD - A higher order array method used to loop through an array. It holds three parameters. The first array holds the items in the array, the second stores the index position of the array while the third parameter stores the whole array.
// const arrayNames = [`Jenny`, `Mathew`, `Evan`, `Emmanuel`]
// arrayNames.forEach(function(eachName,second,third){
//     console.log(third)
// })

// FOR-EACH METHOD - for object literals
// const arrayOfStudentObjects = [
//     {
//         studentName : `Jenny`,
//         studentIDs : 234,
//         studentAge : 21
//     },

//     {
//         studentName : `Debbs`,
//         studentIDs : 989,
//         studentAge : 24
//     },

//     {
//         studentName : `Esther`,
//         studentIDs : 621,
//         studentAge : 38
//     }
// ]

// arrayOfStudentObjects.forEach(function(student){
//     let nameOfStudents = student.studentName
//     console.log(nameOfStudents)
// })

// // for-each using array storing countries
// const nigeriaStates = [`Anambra`, `Lagos`, `Abia`, `Benue`]
// nigeriaStates.forEach(function(states, index, array){
//     console.log(array)
// })

// // FITER METHOD
// Filter using an array
// const namesOfBuyers = [`stacy`, `beulah`, `Jane`, `Joan`]
// const filteredCustomers = namesOfBuyers.filter(function(customer,index,array){
//     return customer === `stacy`
// })
// console.log(filteredCustomers)

// // filter using object in an array
// const bankAccountDetails = [
//     {
//         customerName : `Chisom`,
//         customerAccountNumber : 278,
//         customerAge : 22
//     },

//     {
//         customerName : `Sommy`,
//         customerAccountNumber : 298,
//         customerAge : 28
//     },

//     {
//         customerName : `Dorah`,
//         customerAccountNumber : 178,
//         customerAge : 18
//     }
// ]

// const filterName = bankAccountDetails.filter(function(account){
//     return account.customerAccountNumber === 178
// })
// console.log(filterName)

