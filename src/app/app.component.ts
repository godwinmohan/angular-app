import { Component } from '@angular/core';
import { Book } from './book'
import { BookstoreService } from './bookstore.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tdf';

  bookModel = new Book('','','');

  constructor(private _bookStoreService : BookstoreService){

  }

  onSubmit(){
    console.log(this.bookModel)
    this._bookStoreService.addBook(this.bookModel)
    .subscribe(
        data => console.log('Success!!' , data),
        error => console.log('Error!!' , error)        
    )
  }
}
