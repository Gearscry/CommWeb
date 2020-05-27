class Circle1 extends Shape1{
    //attributs
    protected radius:number;

    constructor(radius : number){
        super(0,0);
        this.radius = radius;
    }

    setRadius1(radius:number) : void{
        this.radius = radius;
    }
    
    getRadius1() : number{
        return this.radius;
    }

    draw1(context : any) : void{
    context.beginPath();
    context.arc(this.getCenter1().getX1(), this.getCenter1().getY1(), this.radius, 0, 2 * Math.PI);
    context.stroke();
    }
}