//
// Word Guess Game
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
    "weary", "quest", "blazing", "tobacco", "bullets", "pistol", "desert"
]


var blankWord = [];



function getRandomWord() {
    return wordOptions[Math.floor(Math.random() * wordOptions.length)];
}

var currentWord = getRandomWord();
var wordLength = currentWord.length;

for (var i = 0; i < wordLength; i++)
    blankWord.push('-');

console.log(currentWord);
console.log(blankWord);



// so far, comp is choosing a word, word is being logged. for loop is pushing a "-" to blankWord array 
// for wordLength (every letter in that word)