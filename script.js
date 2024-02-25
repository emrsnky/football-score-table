let score = 0;

let chelsea = document.getElementById("chelsea");
let arsenal = document.getElementById("arsenal");

function incrementScoreChelsea() {
    score++;
    chelsea.innerHTML = score;

}

function decrementScoreChelsea() {
    score--;
    chelsea.innerHTML = score;
    if(score < 0){
        score = 0;
        chelsea.innerHTML = score;
    }
}

function incrementScoreArsenal() {
    score++;
    arsenal.innerHTML = score;

}

function decrementScoreArsenal() {
    score--;
    arsenal.innerHTML = score;
    if(score < 0){
        score = 0;
        arsenal.innerHTML = score;
    }
}