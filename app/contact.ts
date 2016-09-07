export class Contact{
    constructor(public username:string, public isMe:boolean = false, public state:string = 'inactive' ){}
    toggleState(){
        this.state= (this.state=='active')?'inactive':'active';
    }
}
