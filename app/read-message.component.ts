import { Component, Input } from '@angular/core';
import {Message} from './message';

@Component({
    selector: 'read-message',
        template: ` 
        <div class="message-header-line">
            <div>From:</div>  
            <div>{{message.from}}</div>
            <div>To:  </div>  
            <div>{{message.to}}  </div>
        </div>
        <div class="message-header-line">
            <div>Title:</div> 
            <div class="title">{{message.title}}</div>
        </div>
        <div style="width:90vw;">
            {{message.content}}
        </div>
    `,
    styles: [`
        .message-header-line{
            display: flex;
            flex-direction: row;
            align-items:    center;
        }
        div div {
            width: 5vw;
        }
        div {
            height:     2vw;
            font-size:  0.8vw;
            margin-right: 1vw;
        }
        .title {
            width: 50vw;
        }
    `] 
})
export class ReadMessageComponent {
    @Input()
    message: Message;
}
