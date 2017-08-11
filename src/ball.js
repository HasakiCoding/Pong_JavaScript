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
        var rnd1 = Math.sign(Math.random() * 2 - 1);
        var rnd2 = Math.sign(Math.random() * 2 - 1);
        this.directionY = Math.sign(rnd1) * Math.ceil(Math.random() * 10 + 5);
        this.directionX = Math.sign(rnd2) * (20 - Math.abs(this.directionY));
    }

    check(frame1, frame2, paddle1, paddle2){
        if(this.collideObjects(frame1) || this.collideObjects(frame2)){
            this.bounce();
            this.directionY = -this.directionY;
            console.log("HI");
        } else if(this.collideObjects(paddle1) || this.collideObjects(paddle2)){
            this.bounce();
            this.directionX = -this.directionX;
            console.log("Bye");
            console.log(this.directionX);
        }
    }

    collideObjects(object){
        if(Math.abs(this.centerY - object.centerY) <= this.radius + (object.height * 0.5) && Math.abs(this.centerX - object.centerX) <= this.radius + (object.width * 0.5)){
            return true;
        }
    }

    bounce(){
        this.directionX += Math.sign(this.directionX) * 0.5;
	    this.directionY += Math.sign(this.directionY) * 0.5;
    }
}