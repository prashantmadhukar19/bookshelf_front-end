import { Component, OnInit } from '@angular/core';
import { Book } from '../Entity/book';
import { BookService } from '../Services/book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  
  bookObj = new Book();
  message : string = "";

  constructor(private httpclient:BookService) {
   }

  ngOnInit() {
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
