import { Component, inject } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-suggestion',
  standalone: false,
  templateUrl: './suggestion.component.html',
  styleUrl: './suggestion.component.css'
})
export class SuggestionComponent {

  taskService = inject(TaskService)

}
