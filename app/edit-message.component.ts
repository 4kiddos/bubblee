import { Component, Input } from '@angular/core';
import {Message} from './message';

@Component({
    selector: 'edit-message',
    //     template: `
    //     <form (ngSubmit)="onSubmit()" #messageForm="ngForm">
    //         <button type="submit" [disabled]="!messageForm.form.valid">Submit</button>
    //         <label for="name">Name</label>
    //         <input type="text" class="form-control" id="name"
    //             required
    //             [(ngModel)]="message.name" name="name"
    //             #name="ngModel" >
    //         <div [hidden]="name.valid || name.pristine" 
    //             class="alert alert-danger">
    //         Name is required
    //         </div>
    //     </form>
    // `,
        template: `
        <form (ngSubmit)="onSubmit()" #messageForm="ngForm">
            <button type="submit" [disabled]="!messageForm.form.valid">Submit</button>
            <div class="message-header-line">
                <h2>From:</h2>
                <input type="text" class="form-control" id="from" [(ngModel)]="message.from" name="from" #from="ngModel"/>
            </div>
            <div class="message-header-line">
                <h2>To:</h2>
                <input [(ngModel)]="message.to" >
            </div>
            <div class="message-header-line">
                <h2>Title:</h2>
                <input [(ngModel)]="message.title" class="title" >
            </div>
            <textarea name="text" style="width:90vw;" >
                {{message.content}}
            </textarea>
        </form>
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
export class EditMessageComponent {
    // @Input()
    message :Message = new Message();
    submitted = false;
    onSubmit() { this.submitted = true; }
}
