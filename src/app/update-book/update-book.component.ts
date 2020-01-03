import { Component, OnInit } from '@angular/core';
import { Book } from '../Entity/book';
import { BookService } from '../Services/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  
  bookObj = new Book();
  message : string = "";
  temp : any;

  constructor(private httpclient:BookService ,private _Activatedroute:ActivatedRoute) {
   }

  ngOnInit() {
    this._Activatedroute.paramMap.subscribe(params => { 
      this.temp= Number(params.get('id')); 
      this.bookObj.bookId = Number(params.get('id')); 
  });
  }

  sendData(){
    
    
    return this.httpclient.updateBooks(this.bookObj,this.bookObj.bookId).subscribe(err=>
      {console.log("successful");
      this.bookObj.bookId=null;
      this.bookObj.bookTitle=null;
      this.bookObj.bookAuthor=null;
      this.bookObj.bookPrice=null;
      this.bookObj.bookPublisher=null;
      this.bookObj.bookQuantity=null;

     alert("Book updated successfully!");
    });
    
  }

}
