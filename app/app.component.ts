import { Component } from '@angular/core';

import { ReadMessageComponent } from './read-message.component';
import { EditMessageComponent } from './edit-message.component';
import { Message } from './message';

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

var storedMessages: Message[] = MESSAGES;

        // <div (click)="onAdd(newMessage)">Send</div>
        // <edit-message [(ngModel))]="newMessage"></edit-message>


@Component({
    selector: 'my-app',
    providers: [ReadMessageComponent, EditMessageComponent],
    template: ` 
    <h1>Messages</h1>
    <div >
        <div>Compose</div>
        <edit-message from="toto" to="pouet" (editMessagePost)="onAdd($event);"></edit-message>
    </div>
    <div *ngFor="let message of messages">
        <read-message [message]="message"></read-message>
    </div>
    `
})
export class AppComponent {
    myIdentity = 'Ariel';
    messages = storedMessages;
    newMessage: Message;
    identitySelection = ['mamie'];
    onAdd(msg:Message){
        console.log(msg);
        this.messages.unshift(msg);
    }

}


