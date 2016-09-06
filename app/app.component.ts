import { Component } from '@angular/core';

import { EmailComponent } from './email.component';

@Component({
    selector: 'my-app',
    providers: [EmailComponent],
    // template: `
    //     <h1>Bubblee</h1>
    //     <bemail />
    // `

    template: ` 
    <h1>{{title}}</h1>
    <h2>From: <input value="{{from}}"></h2>
    <h2>To:   <input value="{{to}}"  ></h2>
    <h2>Title:<input value="{{title}}"></h2>
    <textarea name="text">{{content}}</textarea>
    `
})
export class AppComponent {
    to:      string = "mamie";
    from:    string = "Ariel";
    title:   string = "first email";
    content: string = ` some multi line content
    and here is line2
    then line 3 followed by a last CR
    `;
}


