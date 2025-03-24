import { Component, inject, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { SuggestionStoreService } from '../suggestion-store.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Suggestion } from '../models';

@Component({
  selector: 'app-suggestion',
  standalone: false,
  templateUrl: './suggestion.component.html',
  styleUrl: './suggestion.component.css'
})
export class SuggestionComponent implements OnInit {


  router = inject(Router)
  taskService = inject(TaskService)
  suggestionStore = inject(SuggestionStoreService)
  
  

  suggestionList$ = this.suggestionStore.getSuggestions()
  suggestionListItems$: Observable<Suggestion[]> = this.suggestionStore.getSuggestionListItems()

  ngOnInit(): void {
    this.suggestionStore.initialise();
  }


  nextPage(){
    this.router.navigate(['']);
  }

}
