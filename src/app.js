//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  const data = [managerName, managerAge, currentTeam, trophiesWon];
  return data;
}
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation) {
  return formation.length === 0 ? null : {
    defender: formation[0],
    midfield: formation[1],
    forward: formation[2],
  };
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year

function filterByDebut(year) {
  return players.filter(({ debut }) => debut === year);
}

//Progression 4 - Filter players that play at the position _______

function filterByPosition(position) {
  var place = players.filter((player) => player.position == position);
  return place;
}

//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName) {
  return players.filter((player) =>
    player.awards.some((award) => award.name === awardName)
  );
}

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes) {
  return players.filter((player) => 
    player.awards.reduce((count, award) => 
      count + (award.name === awardName ? 1 : 0), 0) === noOfTimes
  );
}

//Progression 7 - Filter players that won ______ award and belong to ______ country

function filterByAwardxCountry(awardName, country) {
  let arr = filterByAward(awardName);
  let nation = arr.filter((player) => player.country == country);
  return nation;
}
//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  return players.filter(({ awards, team: playerTeam, age: playerAge }) =>
    awards.length >= noOfAwards && playerTeam === team && playerAge < age
  );
}

//Progression 9 - Sort players in descending order of their age
function SortByAge() {
  return players.slice().sort((a, b) => b.age - a.age);
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function FilterByTeamxSortByNoOfAwards(team) {
  return players
    .filter(player => player.team === team)
    .sort((a, b) => b.awards.length - a.awards.length);
}


//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function SortByNamexAwardxTimes(award, times, country) {
  let arr = filterByAwardxTimes(award, times);
  let filteredTimes = arr.filter(function (player) {
    return player.country == country;
  });
  return filteredTimes.sort();
}
//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order

function SortByNamexOlderThan(age) {
  let arr = players.filter(function (player) {
    return player.age > age;
  });
  let ronaldo = arr.sort();
  let temp = ronaldo;
  for (let i = 0; i < ronaldo.length; i++) {
    for (let j = 0; j < ronaldo.length; j++) {
      if (temp[j].awards.length < temp[j + 1].awards.length) {
        let temp = temp[j];
        temp[j] = temp[j + 1];
        temp[j + 1] = temp;
      }
    }
  }
  return temp;
}
