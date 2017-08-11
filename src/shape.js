export default class Shape {
    constructor(context, centerX, centerY, drawColor) {
        this.context = context;
        this.centerX = centerX;
        this.centerY = centerY;
        this.drawColor = drawColor;
    }

    render() {
        this.context.fillStyle = this.drawColor;
    }

    move(moveX, moveY) {
        this.setPosition(this.centerX + moveX, this.centerY + moveY);
    }

    setPosition(posX, posY){
        this.centerX = posX;
        this.centerY = posY;
    }

    reset(resetX, resetY){
        this.centerX = resetX;
        this.centerY = resetY;
    }
}