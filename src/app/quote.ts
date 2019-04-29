export class Quote {
    public showQuote:boolean;
      constructor( public id:number, public quoteText:string,public author:string, public name:string, public dislike:number, public like:number){
          this.showQuote=false
      }
    }
  
