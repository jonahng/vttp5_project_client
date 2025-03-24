import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Suggestion, UserDetail } from './models';

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

  postForm(userdetails: UserDetail): Observable<any>{
    console.log(JSON.stringify(userdetails));
    return this.http.post<any>("/api/post", JSON.stringify(userdetails));
  }

  deleteTask(taskId: string): Observable<any>{

    const urlprefix = "/api/delete/";
    const finalurl = urlprefix + taskId;
    console.log("SENDING DELETE REQUEST FOR TASK:", taskId , finalurl);
    return this.http.delete<any>(finalurl)

  }
}
