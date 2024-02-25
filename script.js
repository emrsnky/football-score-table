let scoreChelsea = 0;
let scoreArsenal = 0;

let chelsea = document.getElementById("chelsea");
let arsenal = document.getElementById("arsenal");

function incrementScoreChelsea() {
  scoreChelsea++;
  chelsea.innerHTML = scoreChelsea;
}

function decrementScoreChelsea() {
  scoreChelsea--;
  chelsea.innerHTML = scoreChelsea;
  if (scoreChelsea < 0) {
    scoreChelsea = 0;
    chelsea.innerHTML = scoreChelsea ;
  }
}

function incrementScoreArsenal() {
    scoreArsenal++;
  arsenal.innerHTML = scoreArsenal;
}

function decrementScoreArsenal() {
    scoreArsenal--;
  arsenal.innerHTML = scoreArsenal;
  if (scoreArsenal < 0) {
    scoreArsenal = 0;
    arsenal.innerHTML = scoreArsenal;
  }
}

//change team names
let team1 = document.getElementById("team1");
let team2 = document.getElementById("team2");
function changeTeam() {
  let teamName = prompt("Enter team name");
  team1.innerHTML = teamName;
}

function changeTeam2() {
  let teamName = prompt("Enter team name");
  team2.innerHTML = teamName;
}

//change score

function changeScore() {
    scoreChelsea = Number(prompt("Enter score for team 1"));
  scoreArsenal = Number(prompt("Enter score for team 2"));

  if (scoreChelsea != Number(scoreChelsea) && scoreArsenal != Number(scoreArsenal)) {
    alert("Please enter a valid number");
  } else {
    chelsea.innerHTML = scoreChelsea;
    arsenal.innerHTML = scoreArsenal;
  }
}
