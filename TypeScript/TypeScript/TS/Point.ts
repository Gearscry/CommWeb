class Point1{
    //attributs
    protected x:number;
    protected y:number;

    constructor(x:number,y:number){
        this.x = x;
        this.y = y;
    }

    setX1(x:number) : void {
        this.x = x;
    }

    setY1(y:number) : void {
        this.y = y;
    }
    
    getX1() : number{
        return this.x;
    }

    getY1() : number{
        return this.y;
    }
}