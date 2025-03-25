import { Component, inject, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { SuggestionStoreService } from '../suggestion-store.service';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Suggestion } from '../models';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ComponentstoreService } from '../componentstore.service';

@Component({
  selector: 'app-suggestion',
  standalone: false,
  templateUrl: './suggestion.component.html',
  styleUrl: './suggestion.component.css'
})
export class SuggestionComponent implements OnInit {
  form!: FormGroup
  sub$!: Subscription
  fb = inject(FormBuilder)
  router = inject(Router)
  taskService = inject(TaskService)
  suggestionStore = inject(SuggestionStoreService)
  componentStore = inject(ComponentstoreService)

  
  

  suggestionList$ = this.suggestionStore.getSuggestions()
  suggestionListItems$: Observable<Suggestion[]> = this.suggestionStore.getSuggestionListItems()

  ngOnInit(): void {
    // original this.suggestionStore.initialise();
    this.form = this.createForm()
  }


  nextPage(){
    this.router.navigate(['/userdetails']);
  }


  createForm(){
    return this.fb.group({
      "prompt": this.fb.control<string>(""),
      "activity": this.fb.control<string>(""),
      "reps": this.fb.control<string>(""),
      "description": this.fb.control<string>(""),
    })

  }

  submitForm(){
      const prompt: string = this.form.value.prompt
      const promptWithoutSpaces = prompt.replace(" ", "_");
      console.log("THE PROMPT WITHOUT SPACES IS:", promptWithoutSpaces);

      //new code
      this.suggestionStore.initialise(promptWithoutSpaces);

      this.taskService.getSuggestionsWithPrompt(promptWithoutSpaces).subscribe({
        next:(data) => {
          console.log(data)
        },
        error: (error)=>{
          console.log(error.message)
        }
      });

}

  addSuggestionToStore(suggestion: Suggestion){
    this.componentStore.addSuggestion(suggestion)
    console.log("ADDED SUGGESTION TO COMPONENT STORE:", suggestion)
    
  }
}
