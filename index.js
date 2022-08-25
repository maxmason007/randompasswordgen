const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];
//password array//
let password = [];

//GET 32 THINGS AND METHOD THEM INTO 2 NEW ARRAYS!!
//LET password = ARRAY
//LET PASSWORDTWO = ARRAY 
// let passwordTwo = [];

let pwordOne = document.getElementById("pwordone")
let pwordTwo = document.getElementById("pwordtwo")

function getRandomLetter() {
    let randomIndex = Math.floor(Math.random() * characters.length)
    let randomLetter = characters[randomIndex]
    password.push(randomLetter)
    // passwordTwo.push(randomLetter)
    // return randomLetter
    return randomLetter
}

// //loop random letters x times//

for (let i = 0; i < 30; i++) {
    getRandomLetter(i)
    // return randomLetter
}




//make password, get long array and take off commas, then return
//array through get passwords function and show it on screen//
function startGen() {

    let passwordOneArray = password.slice(0, 16)
    let passwordOne = passwordOneArray.join('')
    let passwordTwoArray = password.slice(16, 30)
    let passwordTwo = passwordTwoArray.join('')

    pwordOne.textContent = passwordOne
    pwordTwo.textContent = passwordTwo

    console.log(password)

}

function getPasswords() {
    return password
    // return passwordTwo
}
