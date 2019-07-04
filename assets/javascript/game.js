//
// Wild Wild West Word Guess Game
// By Gerard Pelly
//

var winText = document.getElementById("winCount"),
    loseText = document.getElementById("lossCount"),
    guessLeft = document.getElementById("remaining"),
    myGuesses = document.getElementById("guessed"),
    theWord = document.getElementById("word");

var wordOptions = ["redemption", "cowboy", "whiskey", "rifle", "steed", "saloon",
    "shootout", "cowgirl", "prospector", "sherrif", "outlaw", "revolver",
    "heist", "robbery", "bounty", "convicted", "felon", "holster",
    "fortune", "infamous", "lawless", "maverick", "reckless", "bandanna",
    "feud", "blacksmith", "judge", "jail", "leather", "howdy", "hostile",
    "wanted", "rawhide", "ranch", "rebellious", "rodeo", "notorious",
    "stockade", "supplies", "sober", "ability", "alibi", "decent", "gallop", "hardship",
    "kinship", "dead", "vendetta", "terratory", "wild", "wrangler",
    "weary", "quest", "blazing", "tobacco", "bullets", "pistol", "brawl", "desert"
]

var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P",
    "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

var x = document.getElementById("winAudio"),
    y = document.getElementById("loseAudio");


var wins = 0,
    losses = 0,
    guessedLetters = [],
    allowedGuesses = 15;

var currentWord = getRandomWord();

var blankWord = createBlankArray();


function playWinAudio() {
    x.play();
}

function playLoseAudio() {
    y.play();
}


function getRandomWord() {
    return wordOptions[Math.floor(Math.random() * wordOptions.length)].toUpperCase().split("");
}


function createBlankArray() {
    var blankArray = [];
    for (var i = 0; i < currentWord.length; i++)
        blankArray[i] = "—";
    return blankArray;
};


theWord.innerHTML = blankWord.join("");

document.onkeyup = function (event) {

    var keyPress = event.key.toUpperCase();

    if (guessedLetters.includes(keyPress) || !alphabet.includes(keyPress)) {
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
        playLoseAudio();
        ++losses;
        guessesRemaining = [];
        guessedLetters = [];
        currentWord = getRandomWord();
        blankWord = createBlankArray();
    }

    if (currentWord.join() === blankWord.join()) {
        playWinAudio();
        ++wins;
        guessesRemaining = [];
        guessedLetters = [];
        currentWord = getRandomWord();
        setTimeout(function () {
            blankWord = createBlankArray();
        }, 2000);
    }

    theWord.innerHTML = blankWord.join("");
    winText.innerHTML = wins;
    loseText.innerHTML = losses;
    guessLeft.innerHTML = guessesRemaining;
    myGuesses.innerHTML = guessedLetters;

    // console.log("=============================");
    // console.log(blankWord);
    // console.log(currentWord);
    // console.log(guessesRemaining);
    // console.log(guessedLetters);
    // console.log(wins);
    // console.log(losses);
}

console.log(currentWord);
console.log(blankWord);