import { Component, OnInit } from '@angular/core';
import { BookService } from '../Services/book.service';

@Component({
  selector: 'app-view-book-by-id',
  templateUrl: './view-book-by-id.component.html',
  styleUrls: ['./view-book-by-id.component.css']
})
export class ViewBookByIdComponent implements OnInit {

  private isSearch: boolean = false;
  books: any;
  usr:boolean;
  id:number;
  constructor(private svc: BookService) { 
    if(sessionStorage.getItem('email')!=null){
      this.usr=true;
    }
    else if(sessionStorage.getItem('username')!=null){
      this.usr=false;
    }
  }

  ngOnInit() {
  }

  showBookById(){
    this.isSearch = !this.isSearch;
    this.svc.getBooksById(this.id).subscribe(
      response =>
      { 
      if(response){
      this.books=response
      }
      else{
      alert("Invalid Book ID!!!");
      this.id=null;
    }});
  }
}
