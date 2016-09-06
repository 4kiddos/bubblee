import { Component, Input } from '@angular/core';
import {Message} from './message';

@Component({
    selector: 'read-message',
        template: ` 
        <div class="message-header-line">
            <h2>From:</h2>
            <input value="{{message.from}}" [readonly]="message.isReadOnly">
        </div>
        <div class="message-header-line">
            <h2>To:</h2>
            <input value="{{message.to}}" [readonly]="message.isReadOnly">
        </div>
        <div class="message-header-line">
            <h2>Title:</h2>
            <input value="{{message.title}}" class="title" [readonly]="message.isReadOnly">
        </div>
        <textarea name="text" style="width:90vw;" [readonly]="message.isReadOnly">
            {{message.content}}
        </textarea>
    `,
    styles: [`
        .message-header-line{
            display: flex;
            flex-direction: row;
            align-items:    center;
        }
        h2 {
            width: 5vw;
        }
        input {
            height:     1.5vw
            font-size:  0.8vw;
        }
        textarea {
            font-size:  0.8vw;
        }
        .title {
            width: 80%;
        }
    `] 
})
export class ReadMessageComponent {
    @Input()
    message: Message;
}
