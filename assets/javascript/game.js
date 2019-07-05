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
    "heist", "robbery", "bounty", "convict", "felon", "holster", "western",
    "fortune", "infamous", "lawless", "maverick", "campfire", "camp", "fire", "reckless", "bandanna",
    "feud", "blacksmith", "judge", "jail", "leather", "howdy", "hostile",
    "wanted", "rawhide", "ranch", "rebellion", "rodeo", "notorious", "horse",
    "stockade", "sober", "guns", "alibi", "gold", "gallop", "hardship",
    "kinship", "dead", "vendetta", "terratory", "wild", "wrangler", "hijack",
    "weary", "quest", "blazing", "tobacco", "bullet", "pistol", "brawl", "desert", "gang"
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

var currentWord;
var blankWord;

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

function makeWord() {
    currentWord = getRandomWord()
}

function makeBlank() {
    blankWord = createBlankArray();
    theWord.innerHTML = blankWord.join("");
}



makeWord();
makeBlank();


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
        ++losses;
        playLoseAudio();
        guessesRemaining = ["15"];
        guessedLetters = [];
        makeWord();
        setTimeout(function () {
            makeBlank();
        }, 1000);
    }

    if (currentWord.join() === blankWord.join()) {
        ++wins;
        playWinAudio();
        guessesRemaining = ["15"];
        guessedLetters = [];
        makeWord();
        setTimeout(function () {
            makeBlank();
        }, 1000);

    }

    theWord.innerHTML = blankWord.join("");
    winText.innerHTML = wins;
    loseText.innerHTML = losses;
    guessLeft.innerHTML = guessesRemaining;
    myGuesses.innerHTML = guessedLetters.join("");

}

// console.log(currentWord);
// console.log(blankWord);