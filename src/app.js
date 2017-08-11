import 'babel-polyfill';
import Rectangle from "./rectangle";
import Paddle from "./paddle";
import Ball from "./ball";

var canvas;
var canvasContext;
canvas = document.getElementById('gameCanvas');
var canvasContext = canvas.getContext('2d');

var sc1=0;
var sc2=0;


const BACK = new Rectangle(canvasContext, 0, 0, canvas.width, canvas.height, 'black');
const frameTop = new Rectangle(canvasContext, 0, -10, canvas.width, 10, 'white');
const frameBot = new Rectangle(canvasContext, 0, canvas.height, canvas.width, 10, 'white');
const frameLeft = new Rectangle(canvasContext, -10, 0, 10, canvas.height, 'white');
const frameRight = new Rectangle(canvasContext, canvas.width, 0, 10, canvas.height, 'white');

var paddle1 = new Paddle(canvasContext, -30, canvas.height, 'white');
var paddle2 = new Paddle(canvasContext, canvas.width-10, canvas.height, 'white');

var ball = new Ball(canvasContext, canvas.width, canvas.height, 'white');



window.onload = function main(){
    reset();
    setInterval(run, 1000/30);
}


function run(){
    BACK.render();
    paddle1.render();
    comp2();
    paddle2.render();
    //moveBall();
    ball.render();
    //console.log(ball.directionX, ball.directionY);
    checkBall();
    ball.move(ball.directionX, ball.directionY);

    canvasContext.fillText("Score: ", 100, 50);
    canvasContext.fillText(sc1, (canvas.width/2)-100, 50);
    canvasContext.fillText(sc2, (canvas.width/2)+100, 50);
    var elem = document.getElementById('page');
    elem.addEventListener("keydown", key);

    //ballDirectionX++;
    //ballDirectionY++;
}

//function ()

function key(evt){
    if(evt.keyCode == 38){
        paddle1.moveUp(40);
    }
    if(evt.keyCode == 40){
        paddle1.moveDown(40);
    }
}

function renderGame(){
    BACK.render();
    paddle1.render();
    paddle2.render();
    ball.render();
}

function moveBall(){
    for(var i=1;i<ball.directionX+1;i++){
        ball.move(Math.sign(ball.directionX) * 1 , ball.directionY / ball.directionX);
        console.log(ball.directionY, ball.directionX);
        console.log(i, ball.directionY / ball.directionX);
        checkBall();
        //renderGame();

    }
}

function checkBall(){
    ball.check(frameTop, frameBot, paddle1, paddle2);
    console.log("check1");
    if(ball.collideObjects(frameLeft)){
        reset();
        sc2++;
    } else if (ball.collideObjects(frameRight)){
        reset();
        sc1++;
    } else {
        return true;
    }
}

function reset(){
    ball.reset(canvas.width, canvas.height);
	paddle1.reset(5, canvas.height * 0.5);
	paddle2.reset(canvas.width - 5, canvas.height * 0.5);
}

function comp2(){
    if(paddle2.centerY < ball.centerY - 35){
		paddle2.moveDown(15);
	} else if(paddle2.centerY > ball.centerY + 35){
		paddle2.moveUp(15);
	}
}