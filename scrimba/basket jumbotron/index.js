// var btns
let OneH = document.getElementById("OneH")
let TwoH = document.getElementById("TwoH")
let ThreeH = document.getElementById("ThreeH")
let OneG = document.getElementById("OneG")
let TwoG = document.getElementById("TwoG")
let ThreeG = document.getElementById("ThreeG")


//var pointers
let pointerH = document.getElementById("pointerH")
let pointerG = document.getElementById("pointerG")

//var point display text
let pointsH = document.getElementById("pointsH")
let pointsG = document.getElementById("pointsG")

//var set count
let countH = 0
let countG = 0

//winning team indicator
function border() {
    if (countG == countH) {
        pointerG.style.border = "8px dotted yellow"
        pointerH.style.border = "8px dotted yellow"
    } else if (countG > countH){
        pointerG.style.border = "8px dotted lightgreen"
        pointerH.style.border = "8px dotted darkred"
    } else {
        pointerH.style.border = "8px dotted lightgreen"
        pointerG.style.border = "8px dotted darkred"
    }
}
setInterval(border, 100)

//var restart btn
let restart = document.getElementById("restart")

//var timer display
let timer = document.getElementById("timer")
let seconds = 30

//func add home
function addOneH() {
    countH += 1
    pointsH.textContent = countH
    seconds = 30
    timer.innerHTML = seconds
    
}
function addTwoH() {
    countH += 2
    pointsH.textContent = countH
    seconds = 30
    timer.innerHTML = seconds
}
function addThreeH() {
    countH += 3
    pointsH.textContent = countH
    seconds = 30
    timer.innerHTML = seconds
}

//func add guest
function addOneG() {
    countG += 1
    pointsG.textContent = countG
    seconds = 30
    timer.innerHTML = seconds
}
function addTwoG() {
    countG += 2
    pointsG.textContent = countG
    seconds = 30
    timer.innerHTML = seconds
}
function addThreeG() {
    countG += 3
    pointsG.textContent = countG
    seconds = 30
    timer.innerHTML = seconds
}


//func start timer
let start = document.getElementById("start")

function startTimer() {
        function display() {
            seconds--
            timer.innerHTML = seconds
            if (seconds < 0){
                seconds = 30
                timer.innerHTML = seconds
            }
        }
        setInterval(display, 1000)
}



//func stop timer
let stop = document.getElementById("stop")

    

//func new game
function newGame() {
    countG = 0
    countH = 0

    pointsG.textContent = countG
    pointsH.textContent = countH

    seconds = 30
    timer.innerHTML = 30


}