var winningCombinations = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [7,5,3]
]

var box = document.getElementsByClassName("box")

for(i of box){
    i.addEventListener("click",handleClick)
}
let click = 0;
let xAttempts = []
let oAttempts = []
let isWon = false

function handleClick(e) {
    var id = e.target.id
    var ptag = document.createElement("p")
    // ptag.textContent = "X"
    ptag.style.color = "#FAB201"
    box[id-1].appendChild(ptag)
    
    if (click%2==0) {
        ptag.textContent = "X"
        click++
        xAttempts.push(parseInt(id))
        result(xAttempts , "X")
    } else {
        ptag.textContent = "O"
        click++
        oAttempts.push(parseInt(id))
        result(oAttempts , "O")
    }
    if (click == 9 && isWon == false) {
        resultBox.style.visibility = "visible"
        messageBox.textContent = "It's a Draw"
    }

}
var resultBox = document.getElementById("result")
let messageBox = document.getElementById("message")

function result(playerAttempts,player) {
    for (let i = 0; i < winningCombinations.length; i++) {
        let check = true
        for (let j = 0; j < winningCombinations[i].length; j++) {
            if (playerAttempts.includes(winningCombinations[i][j])==false) {
                check = false
                break
            }
            
        }
        if (check==true) {
            isWon = true
            resultBox.style.visibility = "visible"
            messageBox.textContent = player + " Won the match"
        }
    }
}
var playBtn = document.getElementById("button")
playBtn.onclick=()=>{
    history.go(0)
}