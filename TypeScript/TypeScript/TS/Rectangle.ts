class Rectangle1 extends Shape1{
    //attributs
    protected width : number;
    protected height : number;

    constructor(width : number, height: number) {
        super(0,0);
        this.width = width;
        this.height = height;
    }

    setWidth1(width: number) : void{
        this.width = width;
    }

    
    setHeight1(height: number) : void{
        this.height = height;
    }

    getWidth1() : number{
        return this.width;
    }

    getHeight1() : number{
        return this.height;
    }

    draw1(context) : void{
        context.beginPath();
        context.rect(this.getCenter1().getX1(),this.getCenter1().getY1(),this.width, this.height);
        context.stroke();
    }
}