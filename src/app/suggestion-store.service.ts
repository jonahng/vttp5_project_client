import { inject, Injectable } from '@angular/core';
import { TaskService } from './task.service';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Suggestion, SuggestionList } from './models';

@Injectable({
  providedIn: 'root'
})
export class SuggestionStoreService {

  taskService = inject(TaskService)

  private suggestionSubject = new BehaviorSubject<SuggestionList>({suggestionList: []})
  suggestionList$ = this.suggestionSubject.asObservable()


  initialise(){
    const subscription = this.taskService.getSuggestions().subscribe({
      next: (suggestionList) => {
        suggestionList.forEach(
          (suggestion) =>{
            console.log(suggestion.activity)
          }
        )
        this.suggestionSubject.next({suggestionList} as SuggestionList)
      }
    })
  }

  getSuggestions() : Observable<SuggestionList>{
    return this.suggestionList$
  }


  getSuggestionListItems(){
    return this.suggestionList$.pipe(
      map((suggestionList) =>{
        return suggestionList.suggestionList as Suggestion[]
      })
    )
  }



  

  }

