import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../task.service';
import { SuggestionStoreService } from '../suggestion-store.service';
import { TASK_ID } from '../models';

@Component({
  selector: 'app-confirmation',
  standalone: false,
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css'
})
export class ConfirmationComponent implements OnInit{
  router = inject(Router)
  taskService = inject(TaskService)
  suggestionStore = inject(SuggestionStoreService)
  receivedTaskId: string = "NO ID RECEIVED";
  TASK_ID_OBJECT!: TASK_ID




  ngOnInit(): void {
    this.TASK_ID_OBJECT = this.suggestionStore.getTaskId()
    console.log("THE TASK ID IS" + this.receivedTaskId);
  }


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
