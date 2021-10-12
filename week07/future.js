var job = ["U.S Army Soldier", "Programmer", "Business person", "Rockstar"];
var city = ["Dallas", "Austin", "Miami", "New York", "Los Angeles"];
var spouse = ["Elizabeth", "Liz", "Eliza"];
var numKids = [0, 1, 2, 3, 4];

var xx = Math.floor(Math.random() * 4)

function fortune(job, city, spouse, numKids) {
document.write("You will be a " + job + " in " + city + ", and married to " + spouse + " with " + numKids + " kids.");
}

fortune (job[xx], city[xx], spouse[xx], numKids[xx])
