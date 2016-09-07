import { Component,
         trigger,state,style,transition,animate } from '@angular/core';

import { ReadMessageComponent } from './read-message.component';
import { EditMessageComponent } from './edit-message.component';
import { Message } from './message';
import { Contact } from './contact';

const MESSAGES: Message[] = [
    { to: "mamie", from: "Ariel", title: "first email", isReadOnly: true, content:
`some multi line content
and here is line2
then line 3 followed by a last CR
`
    },
    { to: "Ariel", from: "mamie", title: "first response", isReadOnly: true, content:
`this is my response`
    },
    { to: "Ariel", from: "mamie", title: "first response", isReadOnly: true, content:
`this is my response`
    },
    { to: "Ariel", from: "mamie", title: "first response", isReadOnly: true, content:
`this is my response`
    },
    { to: "Ariel", from: "mamie", title: "first response", isReadOnly: true, content:
`this is my response`
    },
    { to: "Ariel", from: "mamie", title: "first response", isReadOnly: true, content:
`this is my response`
    },
    { to: "Crystal", from: "papi", title: "first response", isReadOnly: true, content:
`this is my response`
    },
]

var myIdentity          = 'Ariel';
const USERS: string[] = [
    "toto",
    "mamie",
    "Ariel",
    "papi",
]
var storedMessages: Message[] = MESSAGES;
var storedContacts: Contact[] = USERS.map(v=> new Contact(v, v == myIdentity));

@Component({
    selector: 'my-app',
    providers: [ReadMessageComponent, EditMessageComponent],
    template: ` 
    <h2>Messages</h2>
    <div class="container">
        <div [ngClass]="{'left': true, 'left-visible': userSelectorVisible}"
             (mouseenter)="userSelectorVisible=true;"
             (mouseleave)="userSelectorVisible=false;"   >
            <div *ngFor="let contact of contacts" 
                 [hidden]="!userSelectorVisible"
                 [@contactState]="contact.state"
                 (click)="contact.toggleState();updateFilter(contact);"
                 >
                <div class="user">{{contact.username}}</div>
            </div>
        </div>
        <div class="right">
            <div>
                <button (click)="newMessageVisible=!newMessageVisible;">Compose</button>
                <div>{{getContacts()}}</div>
                <edit-message [hidden]="!newMessageVisible" [from]="from" [to]="to" (editMessagePost)="onAdd($event);"></edit-message>
            </div>
            <div *ngFor="let message of relevantMessages">
                <read-message [message]="message"></read-message>
            </div>
        </div>
    </div>
    `,
    styles: [`
        .container {
            display:        flex;
            flex-direction: row;
            align-items:    top;
            overflow:       hidden;
        }
        .left{
            width: 10px;
            height: 100%;
            #overflow-y: scroll;
        }
        .left-visible {
            width:        110px;
        }
        .user{
            margin-left: 11px;
            width: 100px;
            height: 100px;
        }
        .right{
            width: 100%;
        }
    `],
    animations: [
        trigger('contactState', [
            state('inactive', style({
                backgroundColor: '#eee',
                transform: 'scale(1)'
            })),
            state('active', style({
                backgroundColor: '#cfd8dc',
                transform: 'scale(1.1)'
            })),
            transition('inactive => active', animate('100ms ease-in')),
            transition('active => inactive', animate('100ms ease-out')),
        ])
    ]
})
export class AppComponent {
    from    :string;
    to      :string;
    newMessageVisible   = false;
    userSelectorVisible = false;
    messages            = storedMessages;
    relevantMessages: Message[] = [];
    contacts            = storedContacts;
    identitySelection   = ['mamie'];

    ngOnInit(){
        this.updateRelevantList();    
    }
    updateRelevantList(){
        let contacts = this.contacts.filter(v=>v.state=='active');
        let names = contacts.map(v=>v.username);
        this.relevantMessages = this.messages.filter((v,i,a) => names.findIndex(x=>x==v.from || x==v.to)>=0);
        this.from = JSON.stringify(contacts.filter(v=>v.username==myIdentity)); 
        this.to   = JSON.stringify(contacts.filter(v=>v.username!=myIdentity)); 
        console.log(' this.from', this.from)
        console.log(' this.to', this.to)
    }

    onAdd(msg:Message){
        console.log(msg);
        this.messages.unshift(msg);
        this.newMessageVisible=false;
    }
    updateFilter(contact:Contact){
        this.contacts.find(v=>v.username==contact.username).state = contact.state;
        this.updateRelevantList();  
    }
    getContacts(){
        return JSON.stringify(this.contacts);
    }
}


