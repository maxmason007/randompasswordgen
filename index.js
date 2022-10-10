const characters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "~",
    "`",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "-",
    "+",
    "=",
    "{",
    "[",
    "}",
    "]",
    ",",
    "|",
    ":",
    ";",
    "<",
    ">",
    ".",
    "?",
    "/",
];

let pwordOne = document.getElementById("pwordone");
let pwordTwo = document.getElementById("pwordtwo");

const generateRandomArray = () => {
    const randomArray = [];
    const getRandomLetter = (array) => {
        let randomIndex = Math.floor(Math.random() * characters.length);
        let randomLetter = characters[randomIndex];
        randomArray.push(randomLetter);
        return randomArray;
    };

    for (let i = 0; i < 30; i++) {
        getRandomLetter(i);
    }
    return randomArray;
};

const startGen = () => {
    const password = generateRandomArray();
    let passwordOneArray = password.slice(0, 15);
    let passwordOne = passwordOneArray.join("");
    let passwordTwoArray = password.slice(16, 30);
    let passwordTwo = passwordTwoArray.join("");

    pwordOne.textContent = passwordOne;
    pwordTwo.textContent = passwordTwo;

    console.log(passwordOne, "passwordOne");
    console.log(passwordTwo, "passwordTwo");
};

function getPasswords() {
    return password;
    // return passwordTwo
}