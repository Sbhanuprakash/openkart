
export class Order {
    public orderid:string;
    public productname:string;

    constructor(orderid:string,productname:string){
        this.orderid=orderid;
        this.productname=productname;
    }
}