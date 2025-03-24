import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  http = inject(HttpClient)


  getSuggestions() : Observable<string> {
    return this.http.get<string>("/api/suggestions")
  }
}
