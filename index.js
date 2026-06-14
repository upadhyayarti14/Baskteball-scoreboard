let score1 = 12
let score2 = 5
document.getElementById("home-score").textContent = score1
document.getElementById("guest-score").textContent = score2


function addPointsHome1(){
let pointAddHome1 =  score1 += 1 
document.getElementById("home-score").textContent = pointAddHome1
}

function addPointsHome2(){
let pointAddHome2=  score1 += 2 
document.getElementById("home-score").textContent = pointAddHome2
}
function addPointsHome3(){
let pointAddHome3 =  score1 += 3 
document.getElementById("home-score").textContent = pointAddHome3
}


function addPointsGuest1(){
let pointAddGuest1 =  score2 += 1 
document.getElementById("guest-score").textContent = pointAddGuest1
}

function addPointsGuest2(){
let pointAddGuest2=  score2 += 2 
document.getElementById("guest-score").textContent = pointAddGuest2
}
function addPointsGuest3(){
let pointAddGuest3 =  score2 += 3 
document.getElementById("guest-score").textContent = pointAddGuest3
}

function newGame(){
    score1 = 0
    score2 = 0
    
    document.getElementById("home-score").textContent = score1
document.getElementById("guest-score").textContent = score2

}