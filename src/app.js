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
    setInterval(run, 1000/60);
}


function run(){
    for(var i = 0; i < ball.indicator; i++){
    renderGame();
    comp2();
    checkBall();
    ball.move(ball.speedX, ball.speedY);
    }

    var elem = document.getElementById('page');
    elem.addEventListener("keydown", key);

    //ballDirectionX++;
    //ballDirectionY++;
}

function renderGame(){
    BACK.render();
    paddle1.render();
    paddle2.render();
    ball.render();

    canvasContext.fillText("Score: ", 100, 50);
    canvasContext.fillText(sc1, (canvas.width/2)-100, 50);
    canvasContext.fillText(sc2, (canvas.width/2)+100, 50);
}

function key(evt){
    if(evt.keyCode == 38){
        paddle1.moveUp(45);
    }
    if(evt.keyCode == 40){
        paddle1.moveDown(45);
    }
}

function checkBall(){
    ball.check(frameTop, frameBot, paddle1, paddle2);
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
		paddle2.moveDown(10);
	} else if(paddle2.centerY > ball.centerY + 35){
		paddle2.moveUp(10);
	}
}