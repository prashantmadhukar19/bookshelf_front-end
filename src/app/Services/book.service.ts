import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Book } from '../Entity/book';
import { SubBookService } from './sub-book.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  
  constructor(private httpClient:HttpClient, private bookCopyService:SubBookService) { }

  getBooks(){    
    return this.httpClient.get<Book[]>('http://localhost:8081/books');
  }

  addBooks(bookObj:Book ){    
    return this.httpClient.post('http://localhost:8081/books',bookObj);
  }

  updateBooks(bookObj:Book ,bookId : number){    
    return this.httpClient.put('http://localhost:8081/books/'+bookId,bookObj);
  }

  getBooksById(bookId : number){
    return this.httpClient.get<Book>('http://localhost:8081/books/'+bookId);
  }

  searchBooks(bookObj: Book){
    return this.httpClient.post('http://localhost:8081/books/search/', bookObj);
  }

  removeBook(bookId : number){
    // return this.bookCopyService.removeBookCopy(bookId);
    return this.httpClient.delete('http://localhost:8081/books/'+bookId);
  }

  
  
}