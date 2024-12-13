var diceRoll = document.getElementById("diceRoll");
var num = diceRoll.innerHTML;
console.log(num);

function rollDie(){
    // From Source 3
    num = Math.floor(Math.random() * 21);
}

function unlock(element){
    element.style.background = "linear-gradient(rgb(14, 85, 147), rgb(188, 81, 0))";
}
