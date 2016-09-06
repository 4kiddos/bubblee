import { Component } from '@angular/core';


@Component({
    selector: 'bemail',
    template: ` 
    <h1>{{title}}</h1>
    <h2>From: <input value="{{from}}"></h2>
    <h2>To:   <input value="{{to}}"  ></h2>
    <h2>Title:<input value="{{title}]"></h2>
    <input value="{{content}}">
    `
})
export class EmailComponent {
    to:      string = "mamie";
    from:    string = "Ariel";
    title:   string = "first email";
    content: string = ` some multi line content
    and here is line2
    then line 3 followed by a last CR
    `;
}
