import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

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
  
  ngOnInit(): void {
    this.form = this.createForm()
  }

  createForm(){
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
      "task_detail": this.fb.control<string>(""),
      "misc": this.fb.control<string>("")
    })

  }

  nextPage(){
    this.router.navigate(['/confirm']);
  }

  submitForm(){
    
  }




}
