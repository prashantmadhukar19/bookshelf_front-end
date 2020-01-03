import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SubBook } from '../Entity/sub-book';
import { NumberValueAccessor } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SubBookService {

  constructor(private httpClient:HttpClient) { }

  getAllBookCopies(bookId:number){    
    return this.httpClient.get<SubBook[]>('http://localhost:8081/bookCopies/'+bookId);
  }

  addBookCopy(subBookObj:SubBook ){    
    return this.httpClient.post('http://localhost:8081/bookCopies',subBookObj);
  }

  getBookCopyBysubBookId(subBookId : number){
    return this.httpClient.get<SubBook>('http://localhost:8081/bookCopies/subBookId'+subBookId);
  }

  removeBookCopy(subBookId : number){
    return this.httpClient.delete('http://localhost:8081/bookCopies/'+subBookId);

  }
}
