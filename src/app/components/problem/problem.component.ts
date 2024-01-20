import { Component, OnInit, SecurityContext } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as marked from 'marked';
import { Problem } from 'src/app/models/problem.model';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.scss']
})
export class ProblemComponent implements OnInit {
  readmeHtml: SafeHtml | null = null;
  loading: boolean = true; // Initialize as true to show the loading indicator
  error: string = '';
  currentProblem: Problem | null = null
  weekNumber: number = 0
  readmeHtmlMap: { [key: string]: SafeHtml } = {};

  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    private dataService: DataService
  ) { }

  ngOnInit(): void {

    this.dataService.fetchData<any>('assets/data/week0/problem/problem.json').subscribe(
      data => {
        this.currentProblem = data
        this.loading = false;
        // Existing initialization logic
        this.currentProblem?.sections.forEach(section => {
          if (section.isLink && section.path) {
            this.loadReadme(section.path);
          }
        });
      },
      error => {
        this.error = 'Failed to load problems data.';
        this.loading = false;
      }
    );
  }

  loadReadme(path: string) {
    debugger
    if (!path) return;
    this.http.get(path, { responseType: 'text' }).subscribe(
      markdown => {
        debugger
        const html = marked.parse(markdown) as string;
        this.readmeHtmlMap[path] = this.sanitizer.bypassSecurityTrustHtml(html);
      },
      error => {
        console.error('There was an error fetching the README', error);
      }
    );
  }

}