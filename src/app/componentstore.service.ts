import { Injectable } from '@angular/core';
import { Suggestion } from './models';
import { ComponentStore } from "@ngrx/component-store";




export interface State{
  suggestionItems: Suggestion[]
}

const initialState: State = {
  suggestionItems: []
}


@Injectable({
  providedIn: 'root'
})
export class ComponentstoreService extends ComponentStore<State>{

  constructor() { super(initialState)}


  readonly suggestionItems$ = this.select(store => store.suggestionItems)

  readonly addSuggestion = this.updater((store, item:Suggestion) =>{
    return {
      suggestionItems: [...store.suggestionItems, item],
    } as State

  })

}
