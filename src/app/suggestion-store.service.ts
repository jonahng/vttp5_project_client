import { inject, Injectable } from '@angular/core';
import { TaskService } from './task.service';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Suggestion, SuggestionList, TASK_ID } from './models';
import { ComponentstoreService } from './componentstore.service';

@Injectable({
  providedIn: 'root'
})
export class SuggestionStoreService {

  taskService = inject(TaskService)
  componentStore = inject(ComponentstoreService)

  private suggestionSubject = new BehaviorSubject<SuggestionList>({suggestionList: []})
  suggestionList$ = this.suggestionSubject.asObservable()


  //added variable
  initialise(promptWithoutSpaces: string){
    //const subscription = this.taskService.getSuggestions().subscribe
    
    const subscription = this.taskService.getSuggestionsWithPrompt(promptWithoutSpaces).subscribe
    ({
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


  getChosenSuggestion(){
    let chosenSuggestion!:Suggestion;
    this.componentStore.suggestionItems$.subscribe({
      next: (data) =>{
        console.log("the data in getChosen Suggestion in suggestion store service:",data)
        data.forEach(
          (suggestion) =>{
            chosenSuggestion = suggestion
          }
        )
        //chosenSuggestion = data.values
        //add more
      }
    })
    return chosenSuggestion;

  }

  getTaskId(){
    let taskID!:TASK_ID;
    this.componentStore.taskIds$.subscribe({
      next: (data) =>{
        console.log("THE TASK ID BEING READ FROM SUGGESTION STORE SERVICE",data)
        data.forEach(
          (task_id) =>{
            taskID = task_id
          }
        )
        //chosenSuggestion = data.values
        //add more
      }
    })
    return taskID;

  }



  

  }

