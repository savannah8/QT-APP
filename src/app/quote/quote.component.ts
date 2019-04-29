import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  
  @Input() quote:Quote
  @Output() like= new EventEmitter<boolean>();
    
  upvote:number=0;
  downvote:number=0;
  up(){
    this.upvote++;
  }
  
  down(){
    this.downvote++;
  }

 
  ngOnInit() {
  }

}
