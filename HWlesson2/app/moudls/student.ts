

export class Students{
    name:string;
    grade:number;
    clas:string;
    showButtons: boolean = true

    constructor(name:string,grade:number,clas:string){
        this.name=name;
        this.grade=grade;
        this.clas=clas;
        this.showButtons=this.showButtons;
    }
}