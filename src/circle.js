import Shape from "./shape";

export default class Circle extends Shape {
    constructor(context, centerX, centerY, radius, drawColor){
        super(context, centerX, centerY, drawColor);
        this.radius = radius;
    }

    render(){
        super.render();
        this.context.beginPath();
        this.context.arc(this.centerX, this.centerY, this.radius, 0, Math.PI*2, true);
        this.context.fill();
    }
}