import { Directive, HostBinding, HostListener } from "@angular/core";


@Directive({
    selector:'[appmanager]'
})

export class Managedirective {
    
    constructor(){

    }
    
    @HostBinding('class.open') isopen:boolean=false
    @HostListener('click') managebuttonopen(inpobj:any){
        this.isopen=!this.isopen;

    }
}