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


function getRandomWord() {
    return wordOptions[Math.floor(Math.random() * wordOptions.length)];
}

var currentWord = getRandomWord();

console.log(currentWord);

// so far, comp has chosen random word. now i need to display it as blank lines on screen.