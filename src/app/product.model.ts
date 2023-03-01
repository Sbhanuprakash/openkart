export class Product{
    public name:string;
    public description:string
    public imagepath:string;
    public price:number;
    public brand:string;

    constructor(name:string,description:string,imagepath:string,price:number,brand:string){
        this.name=name;
        this.description=description;
        this.imagepath=imagepath;
        this.price=price;
        this.brand=brand;
    }
}