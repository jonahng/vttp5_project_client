import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Suggestion, TASK_ID, UserDetail } from '../models';
import { TaskService } from '../task.service';
import { SuggestionStoreService } from '../suggestion-store.service';
import { ComponentstoreService } from '../componentstore.service';

@Component({
  selector: 'app-userdetails',
  standalone: false,
  templateUrl: './userdetails.component.html',
  styleUrl: './userdetails.component.css'
})
export class UserdetailsComponent implements OnInit{
  form!: FormGroup
  sub$!: Subscription
  fb = inject(FormBuilder)
  router = inject(Router)
  taskService = inject(TaskService)
  suggestionStore = inject(SuggestionStoreService)
  componentStore = inject(ComponentstoreService)

  receivedTaskId: string = "NO ID RECEIVED";

  TASK_ID_OBJECT: TASK_ID = {"task_id": "no task id received"}

  testFieldValue: string = "TEST VALUE ABC"
  chosenSuggestion!: Suggestion

  TASK_DETAILS: string = ""
  
  ngOnInit(): void {
    //getting the suggestion chosen from the suggestion page
    this.chosenSuggestion = this.suggestionStore.getChosenSuggestion()
    this.form = this.createForm()

  }

  createForm(){
    this.TASK_DETAILS = this.chosenSuggestion.activity + " " + this.chosenSuggestion.reps + " " 
    return this.fb.group({
      "email": this.fb.control<string>(""),
      "telegram_id": this.fb.control<string>(""),
      "mon": this.fb.control<boolean>(false),
      "tue": this.fb.control<boolean>(false),
      "wed": this.fb.control<boolean>(false),
      "thu": this.fb.control<boolean>(false),
      "fri": this.fb.control<boolean>(false),
      "sat": this.fb.control<boolean>(false),
      "sun": this.fb.control<boolean>(false),
      "task_detail": this.fb.control<string>(this.TASK_DETAILS),
      "misc": this.fb.control<string>("")
    })

  }

  nextPage(){
    this.router.navigate(['/confirm']);
  }

  submitForm(){
    const userdetails: UserDetail = this.form.value
    userdetails.frequency = 3
    userdetails.epoch_date = "testeepoch"

  
    this.taskService.postForm(userdetails).subscribe({
      next:(data) => {
        console.log(data)
        console.log("THE RECEIVED ID IS:", data.task_id)
        //this.receivedTaskId = data.task_id
        this.TASK_ID_OBJECT.task_id = data.task_id
        console.log("THE TASK ID OBJECT IS NOW:", this.TASK_ID_OBJECT)
        
      },
      error: (error)=>{
        console.log(error.message)
      }
    });
    console.log("SAVING TASK ID TO COMPONENT STORE:", this.TASK_ID_OBJECT.task_id)
    
  }


  addTASKIDtoStore(){
    this.componentStore.addTaskIds(this.TASK_ID_OBJECT);
    console.log("ADDED TASK ID TO COMPONENT STORE", this.TASK_ID_OBJECT);

  }


}
