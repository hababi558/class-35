var ball,database,position

function setup(){
    database = firebase.database()
    createCanvas(500,500);
    ball = createSprite(200,200,10,10);
    ball.shapeColor = "red";
    var loction = database.ref("ball/position")
    loction.on("value",readPosition,showError)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-4,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(4,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-4);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+4);
    }
    drawSprites();
}
function readPosition(data){
    position=data.val()
    ball.x=position.x
    ball.y=position.y
}
function writePosition(x,y){
 database.ref("ball/position").set({
     x: position.x+x,
     y:position.y+y
 })
}
function showError(){
    console.log("ERRORRRRRRRRRRRRRRRRRRRRR")
}
