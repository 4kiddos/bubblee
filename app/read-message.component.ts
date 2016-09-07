import { Component, Input } from '@angular/core';
import {Message} from './message';

@Component({
    selector: 'read-message',
        template: ` 
            <div class="card">
                <div class="message-header-line people">
                    <div class="label">From:</div>  
                    <div class="content">{{message.from}}</div>
                    <div>To:  </div>  
                    <div class="content">{{message.to}}  </div>
                </div>
                <div class="message-header-line">
                    <div>Title:</div> 
                    <div class="title content">{{message.title}}</div>
                </div>
                <div class="content message">
                    {{message.content}}
                </div>
            </div>
       `,
        styles: [`
            .card{
                border:             1px solid #000;
                border-radius:      0.5vw 0.5vw;
                margin:             0.5vw;
                padding:            0.5vw;
                #height:             12vh;
                background-color:   #ccc;
                display:            flex;
                flex-direction:     column;
                align-items:        left;
            }
            .message-header-line{
                font-size:      0.8vw;
                display:        flex;
                flex-direction: row;
                align-items:    center;
                height:         2.5vh;
                margin-bottom:  0.5vh;
            }
            .people {
                width: 5vh;
                display: block-inline;
            }
            .message-header-line div {
                margin-right:   1.0vw;
            }
            .content{
                background-color: #ddd;
            }
            .message-header-line .title {
                width: 100%;
                margin-right:   0;
            }
            .message {
                margin-top:     0.5vw;
                width:          100%;
                height:         5vh;
                overflow:      hidden;
            }
        `] 
})
export class ReadMessageComponent {
    @Input()
    message: Message;
}
