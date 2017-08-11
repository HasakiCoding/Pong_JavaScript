import Shape from "./shape";

export default class Rectangle extends Shape{
    constructor(context, leftX, topY, width, height, drawColor) {
        const centerX = leftX + width * 0.5;
        const centerY = topY + height * 0.5;
        super(context, centerX, centerY, drawColor);
        this.width = width;
        this.height = height;
    }

    get leftX() {
        return this.centerX - this.width * 0.5;
    }

    get topY() {
        return this.centerY - this.height * 0.5;
    }

    set leftX(value) {
        this.centerX = value + this.height * 0.5;
    }

    set topY(value) {
        this.centerY = value + this.height * 0.5;
    }

    render() {
        super.render();
        this.context.fillRect(this.leftX, this.topY, this.width, this.height);
    }
}