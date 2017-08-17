import Circle from "./circle";

export default class Ball extends Circle{
    constructor(context, width, height, drawColor){
        const radius = 10;
        const centerX = width * 0.5 - radius;
        const centerY = height * 0.5 - radius;
        super(context, centerX, centerY, radius, drawColor);
    }

    reset(width, height){
        super.reset(width * 0.5, height * 0.5);
        var rnd1 = Math.random() * 2 - 1;
        var rnd2 = Math.random() * 2 - 1;
        this.directionY = Math.sign(rnd1) * Math.ceil(Math.random() * 2 + 9);
        this.directionX = Math.sign(rnd2) * (20 - Math.abs(this.directionY));
        this.speedY = this.directionY / this.directionY;
        this.speedX = this.directionX / this.directionY;
        this.indicator = 5;
    }

    check(frame1, frame2, paddle1, paddle2){
        if(this.collideObjects(frame1) || this.collideObjects(frame2)){
            this.indicator += 0.1;
            this.speedY = -this.speedY;
        } else if(this.collideObjects(paddle1) || this.collideObjects(paddle2)){
            this.indicator += 0.1;
            this.speedX = -this.speedX;
        }
    }

    collideObjects(object){
        if(Math.abs(this.centerY - object.centerY) <= this.radius + (object.height * 0.5) && Math.abs(this.centerX - object.centerX) <= this.radius + (object.width * 0.5)){
            return true;
        }
    }

    speedUp(){
        //this.directionX += Math.sign(this.directionX) * 0.5;
	    //this.directionY += Math.sign(this.directionY) * 0.5;
    }
}