export class Project{
    name: string;
    blurb: string;
    prev: Project|null=null;
    next: Project|null=null;
    link:string="";
    constructor(name: string, blurb:string,next:Project|null,prev:Project|null, link:string){
        this.name=name;
        this.blurb=blurb;
        this.next=next;
        this.prev=prev;
        this.link=link;
    }
    public getLink(): string{
        return this.link;
    }
    public getName(): string {
        if(this.name!=null){
            return this.name;
        }
        else return '';
    }
    public getBlurb():string{
        if(this.blurb!=null){
            return this.blurb;
        }
        else return "";
    }
    public getNext():Project | null{
        return this.next;
    }
    public getPrev():Project | null{
        return this.prev;
    }
    public setNext(nxt:Project|null){
        this.next=nxt;
    }
    public setPrev(prv:Project|null){
        this.prev=prv;
    }

}
