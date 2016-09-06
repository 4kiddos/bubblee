import {NgModule        } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule    } from '@angular/forms';

import { AppComponent   } from './app.component';
import { ReadMessageComponent} from './read-message.component';
import { EditMessageComponent} from './edit-message.component';

@NgModule({
    imports:        [BrowserModule, FormsModule],
    declarations:   [AppComponent,ReadMessageComponent,EditMessageComponent],
    bootstrap:      [AppComponent]
})
export class AppModule {}
