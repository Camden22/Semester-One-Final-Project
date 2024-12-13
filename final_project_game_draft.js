//screen dimensions code found from source: 1
var width = window.screen.width;
var height = window.screen.height;

//function was brought in from source: 2
function spawnHero(x , y){
    var hero = document.getElementById("hero");
    hero.style.position = "absolute";
    hero.style.left = x +'px';
    hero.style.top = y +'px';
}

spawnHero(width/2,height/2);

document.addEventListener('keydown', moveHero);

//arrow key conditionals in function brought in from code HS

function moveHero(event){

    var increment = 80

    key = event.key;

    let inBounds;

    var pressedKeys = [];

        //conditionals for linear movement

        //prints out key presses

    function boundsConditional(boundRestriction){
        if(boundRestriction){
            inBounds = false;
        }else{
            inBounds = true;
        }
    }

    function linearMovementConditional(pressedKey, movement){
            pressedKeys.push(pressedKey)
            movement
        }

    if( key == "ArrowUp" || key == "w"){
        boundsConditional(height <= 280);
        if(inBounds == true){
            linearMovementConditional("ArrowUp", height -= increment);
        }else{
            console.log("OUCH!");
        }
    }
    
    if( key == "ArrowLeft"|| key == "a"){
        hero.style.transform = "scaleX(-1)";
        boundsConditional(width<= 80);
        if(inBounds == true){
            linearMovementConditional("ArrowLeft", width -= increment);
        }else{
            console.log("OUCH!");
        }
    }

    if( key == "ArrowRight"|| key == "d"){
        hero.style.transform = "scaleX(1)";
        boundsConditional(width >= 3120);
        if(inBounds == true){
            linearMovementConditional("ArrowRight", width += increment);
        }else{
            console.log("OUCH!");
        }
    }

    if( key == "ArrowDown"|| key == "s"){
        boundsConditional(height >= 1080);
        if(inBounds == true){
            linearMovementConditional("ArrowDown", height += increment);
        }else{
            console.log("OUCH!");
        }
    }
    
        //conditionals for diagonial movement
        //Activate CAPS LOCK to access with WASD

    
    if( key == "D"){
        hero.style.transform = "scaleX(1)";
        pressedKeys.push("D")
        height -= increment;
        width += increment;
    }
    if( key == "W"){
        hero.style.transform = "scaleX(-1)";
        pressedKeys.push("W")
        height -= increment;
        width -= increment;
    }
    if( key == "S"){
        hero.style.transform = "scaleX(1)";
        pressedKeys.push("S")
        height += increment;
        width += increment;
    }
    if( key == "A"){
        hero.style.transform = "scaleX(-1)";
        pressedKeys.push("A")
        height += increment;
        width -= increment;
    }
   
    console.log(pressedKeys);
    console.log(height, width);
    spawnHero(width/2,height/2);

}
    


