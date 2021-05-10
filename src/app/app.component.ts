import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirebaseProviderService } from './firebase-provider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {
  title = 'mu-todo';
  $todos: Observable<any[]>;

  constructor(private fires: FirebaseProviderService) {
    this.$todos = this.fires.app.db.FromCollection('todos').GetAllDocs<any>();
  }
}
