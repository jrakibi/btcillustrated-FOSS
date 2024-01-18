import { Component, OnInit } from '@angular/core';
import { Problem } from 'src/app/models/problem.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.scss']
})
export class ProblemComponent implements OnInit {
  exercise: Problem | null = null;
  loading: boolean = false;
  error: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loading = true;
    this.dataService.fetchData<Problem>('assets/data/problems.json').subscribe(
      data => {
        this.exercise = data;
        this.loading = false;
      },
      error => {
        this.error = 'Failed to load exercise data.';
        this.loading = false;
      }
    );
  }
}
