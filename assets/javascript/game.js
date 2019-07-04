//
// Wild Wild West Word Guess Game
// By Gerard Pelly
//


var wordOptions = ["redemption", "cowboy", "whiskey", "rifle", "steed", "saloon",
    "shootout", "cowgirl", "prospector", "sherrif", "outlaw", "revolver",
    "heist", "robbery", "bounty", "convicted", "felon", "holster",
    "fortune", "infamous", "lawless", "maverick", "reckless", "bandanna",
    "feud", "blacksmith", "judge", "jail", "leather", "howdy", "hostile",
    "peacemaker", "rawhide", "ranch", "rebellious", "rodeo", "notorious",
    "stockade", "supplies", "sober", "ability", "decent", "gallop", "hardship",
    "kinship", "oppotunity", "vendetta", "terratory", "wild", "wrangler",
    "weary", "quest", "blazing", "tobacco", "bullets", "pistol", "brawl", "desert"
]

var wins = 0;
var losses = 0;

var allowedGuesses = 15;

var guessedLetters = []

var currentWord = getRandomWord();

var blankWord = createBlankArray();

var guessedLetters = [];



function getRandomWord() {
    return wordOptions[Math.floor(Math.random() * wordOptions.length)].toUpperCase().split("");
}


function createBlankArray() {
    var blankArray = [];
    for (var i = 0; i < currentWord.length; i++)
        blankArray[i] = "-";
    return blankArray;
};


document.onkeyup = function (event) {

    var keyPress = event.key.toUpperCase();

    if (guessedLetters.includes(keyPress)) {
        return
    }

    guessedLetters.push(keyPress);

    var guessesRemaining = allowedGuesses - guessedLetters.length;

    if (currentWord.includes(keyPress)) {

        for (j = 0; j < currentWord.length; j++) {
            if (currentWord[j] === keyPress) {
                blankWord[j] = keyPress;
            }
        }

    }

    if (guessesRemaining <= 0 && currentWord.join() !== blankWord.join()) {
        console.log("You Lost!")
    }

    if (currentWord.join() === blankWord.join()) {
        console.log("You Won!")
    }

    // console.log(guessedLetters);
    console.log(guessesRemaining);
    console.log(blankWord);
    console.log(currentWord);
}


console.log(currentWord);
console.log(blankWord);