import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../task.service';
import { SuggestionStoreService } from '../suggestion-store.service';

@Component({
  selector: 'app-confirmation',
  standalone: false,
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css'
})
export class ConfirmationComponent {
  router = inject(Router)
  taskService = inject(TaskService)
  suggestionStore = inject(SuggestionStoreService)






  nextPage(){
    this.router.navigate(['/suggestions']);
  }


  deleteTask(){
    this.taskService.deleteTask("97c32558").subscribe({
      next:(data) => {
        console.log(data)
      },
      error: (error)=>{
        console.log(error.message)
      }
    });
  }
  

}
