import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';


import { QuoteMadeComponent } from './/quote-made/quote-made.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { TimeLapsePipe } from './time-lapse.pipe';



@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteFormComponent,
    QuoteMadeComponent,
    TimeLapsePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
