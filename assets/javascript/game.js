//
// Wild Wild West Word Guess Game
// By Gerard Pelly
//


var wordOptions = ["redemption", "cowboy", "whiskey", "rifle", "steed", "saloon",
    "shootout", "cowgirl", "prospector", "sherrif", "outlaw", "revolver",
    "heist", "robbery", "bounty", "convicted", "felon", "holster",
    "fortune", "infamous", "lawless", "maverick", "reckless", "bandanna",
    "feud", "blacksmith", "judge", "jail", "leather", "howdy", "hostile",
    "peacemaker", "rawhide", "rancher", "rebellious", "rodeo", "notorious",
    "stockade", "supplies", "sober", "ability", "decent", "gallop", "hardship",
    "kinship", "oppotunity", "vendetta", "terratory", "wild", "wrangler",
    "weary", "quest", "blazing", "tobacco", "bullets", "pistol", "brawl", "desert"
]

var wins = 0;
var losses = 0;

var allowedGuesses = 15; // number of guesses allowed

var guessedLetters = [] // array of letters guessed by player

var currentWord = getRandomWord();

var wordLength = currentWord.length;

var blankWord = createBlankArray();

var guessedLetters = [];



function getRandomWord() {
    return wordOptions[Math.floor(Math.random() * wordOptions.length)].toLowerCase().split("");
}


function createBlankArray() {
    var blankArray = [];
    for (var i = 0; i < wordLength; i++)
        blankArray[i] = "-";
    return blankArray;
};

function pushToGuessed(x) {
    if (guessedLetters.includes(x) === false) {
        guessedLetters.push(x);
    }
}


// created a loop comparinging currentWord array to blankWord array  --    for ( a in currentWord) {} --

document.onkeyup = function (event) {

    var keyPress = event.key.toLowerCase();

    pushToGuessed(keyPress);

    var guessesRemaining = allowedGuesses - guessedLetters.length;

    if (currentWord.includes(keyPress)) {

        for (j = 0; j < currentWord.length; j++) {
            if (currentWord[j] === keyPress) {
                blankWord[j] = keyPress;
            }
        }

    }


    console.log(guessedLetters);
    console.log(guessesRemaining);
    console.log(blankWord);
    console.log(currentWord);
}

// blankWord.splice(currentWord.indexOf(keyPress), 1, keyPress);


console.log(currentWord);
console.log(blankWord);



// so far, comp is choosing a word, word is being logged. for loop is pushing a "-" to blankWord array 
// for wordLength (every letter in that word)