import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Suggestion } from './models';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  http = inject(HttpClient)


  getSuggestions() : Observable<Suggestion[]> {
    console.log("TRYING TO GET SUGGESTIONS USING HTTP")
    return this.http.get<Suggestion[]>("/api/suggestions")
  }
}
