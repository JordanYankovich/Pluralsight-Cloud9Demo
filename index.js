let dallasMavericks = require('./dallasMavericks');
let dallasStars = require('./dallasStars');
let dallasCowboys = require('./dallasCowboys');
let execute = function () {
    let team = process.env.CURRENT_TEAM;
    switch (team) {
        case "mavericks":
            console.log(dallasMavericks.getPlayerRoster())
            break;
        case "stars":
            console.log(dallasStars.getPlayerRoster())
            break;
        case "cowboys":
            console.log(dallasCowboys.getPlayerRoster())
            break;
        default:
            console.log("No environment variable specified!")
    }
}

execute();