import { Injectable } from '@angular/core';
import { Suggestion, TASK_ID } from './models';
import { ComponentStore } from "@ngrx/component-store";




export interface State{
  suggestionItems: Suggestion[]
  //taskid
  taskIds: TASK_ID[]
}

const initialState: State = {
  suggestionItems: [],
  //taskid
  taskIds:[]
}


@Injectable({
  providedIn: 'root'
})
export class ComponentstoreService extends ComponentStore<State>{

  constructor() { super(initialState)}


  readonly suggestionItems$ = this.select(store => store.suggestionItems)

  //taskid
  readonly taskIds$ = this.select(store => store.taskIds)



  readonly addSuggestion = this.updater((store, item:Suggestion) =>{
    return {
      suggestionItems: [...store.suggestionItems, item],
    } as State

  })


  readonly addTaskIds = this.updater((store, taskID:TASK_ID) =>{
    return {
      taskIds: [taskID],
    } as State

  })




}
