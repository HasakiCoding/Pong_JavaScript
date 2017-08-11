import Rectangle from "./rectangle";

export default class paddle extends Rectangle{
    constructor(context, leftX, gameHeight, drawColor) {
        const width = 10;
        const height = 130;
        const topY = gameHeight * 0.5 - height;
        super(context, leftX, topY, width, height, drawColor);
    }

    render(){
        super.render();
    }

    moveUp(amount){
        this.move(0, -amount);
    }

    moveDown(amount){
        this.move(0, amount);
    }
}