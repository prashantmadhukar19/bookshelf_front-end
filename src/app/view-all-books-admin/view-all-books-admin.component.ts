import { Component, OnInit } from '@angular/core';
import { BookService } from '../Services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all-books-admin',
  templateUrl: './view-all-books-admin.component.html',
  styleUrls: ['./view-all-books-admin.component.css']
})
export class ViewAllBooksAdminComponent implements OnInit {

  books: any[];
  
  private usr:boolean;

  constructor(private svc: BookService,private router:Router,private http : BookService) { 
    this.refresh();
    if(sessionStorage.getItem('email')!=null){
      this.usr=true;
    }
    else if(sessionStorage.getItem('username')!=null){
      this.usr=false;
    }
    
  }
  
  

  ngOnInit() {  }



  refresh(){
    this.svc.getBooks().subscribe(
      response => this.books=response
    );
  }

  deleteBook(bookId){
    
    return this.http.removeBook(bookId).subscribe(err=>
      {
      console.log("successful");
      alert("Book Successfully Deleted");
      this.refresh();
      });
      
  }

  // update(){
  //   this.router.navigate(['update-book']);
  // }
  

}
