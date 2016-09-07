import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Message} from './message';

@Component({
    selector: 'edit-message',
        template: `
        <form (ngSubmit)="onSubmit()" #messageForm="ngForm">
            <button type="submit" [disabled]="!messageForm.form.valid">Submit</button>
            <div class="message-header-line">
                <label for="from">From</label>
                <input type="text" class="form-control" id="from"
                    required
                    [(ngModel)]="message.from" name="from"
                    #from="ngModel" >
                <div [hidden]="from.valid || from.pristine" 
                    class="alert alert-danger">
                From is required
                </div>
            </div>
            <div class="message-header-line">
                <label for="to">To</label>
                <input type="text" class="form-control" id="to"
                    required
                    [(ngModel)]="message.to" name="to"
                    #to="ngModel" >
                <div [hidden]="to.valid || to.pristine" 
                    class="alert alert-danger">
                To is required
                </div>
            </div>
            <div class="message-header-line">
                <label for="title">Title</label>
                <input type="text" class="form-control" id="title"
                    required
                    [(ngModel)]="message.title" name="title"
                    #title="ngModel" >
                <div [hidden]="title.valid || title.pristine" 
                    class="alert alert-danger">
                Title is required
                </div>
            </div>
            <div class="message-header-line">
                <textarea [(ngModel)]="message.content" name="content"></textarea>
            </div>
        <div class="cheat">{{stringify()}}</div>
        </form>
    `,

                // <textarea class="form-control" id="content"
                //     [(ngModel)]="message.content" name="content"
                //     #content="ngModel" >

    styles: [`
        .message-header-line{
            display: flex;
            flex-direction: row;
            align-items:    center;
        }
        label {
            width: 5vw;
        }
        input {
            height:     1.5vw
            font-size:  0.8vw;
        }
        textarea {
            font-size:  0.8vw;
            width:      100%;
            height:     20vh;
        }
        .title {
            width: 80%;
        }
        .cheat {
            color: #888;
        }
        form {
            margin: 2vw;
        }
        form div {
            margin:     0.5vw;
        }
    `] 
})
export class EditMessageComponent {
    @Input() from:string;
    @Input() to  :string;
    @Output() editMessagePost:EventEmitter<Message> = new EventEmitter<Message>();
    message :Message= new Message(); 
    ngOnInit(){
        this.message.from = this.from;
        this.message.to   = this.to;
    }
    onSubmit(){
        this.editMessagePost.emit(this.message);
    }
    submitted = false;
    stringify():string {return JSON.stringify(this.message);}
}
