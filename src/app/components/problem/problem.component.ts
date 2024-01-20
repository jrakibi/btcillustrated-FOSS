// import { HttpClient } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
// import { DomSanitizer } from '@angular/platform-browser';
// import { marked } from 'marked';
// import { Problem } from 'src/app/models/problem.model';
// import { DataService } from 'src/app/services/data.service';

// @Component({
//   selector: 'app-problem',
//   templateUrl: './problem.component.html',
//   styleUrls: ['./problem.component.scss']
// })
// export class ProblemComponent implements OnInit {
//   // exercise: Problem | null = null;
//   // loading: boolean = false;
//   // error: string = '';

//   // constructor(private dataService: DataService) {}

//   // ngOnInit(): void {
//   //   this.loading = true;
//   //   this.dataService.fetchData<Problem>('assets/data/problems.json').subscribe(
//   //     data => {
//   //       this.exercise = data;
//   //       this.loading = false;
//   //     },
//   //     error => {
//   //       this.error = 'Failed to load exercise data.';
//   //       this.loading = false;
//   //     }
//   //   );
//   // }

//   readmeHtml: string = '';

//   constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

//   ngOnInit(): void {
//     this.loadReadme();
//   }

//   loadReadme() {
//     const readmeUrl = 'https://raw.githubusercontent.com/user/repo/branch/README.md';
//     this.http.get(readmeUrl, { responseType: 'text' }).subscribe(
//       markdown => {
//         this.readmeHtml = marked(markdown);
//       },
//       error => {
//         console.error('There was an error fetching the README', error);
//       }
//     );
//   }
// }







import { Component, OnInit, SecurityContext } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as marked from 'marked';


@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.scss']
})
export class ProblemComponent implements OnInit {
  readmeHtml: SafeHtml | null = null;
  loading: boolean = true; // Initialize as true to show the loading indicator
  error: string = '';

  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.loadReadme();
  }

  loadReadme() {
    const readmePath = 'assets/weeks/week0/readme'; // Path to your local asset
    this.http.get(readmePath, { responseType: 'text' }).subscribe(
      markdown => {
        const html = marked.parse(markdown) as string; // Convert markdown to HTML
        this.readmeHtml = this.sanitizer.bypassSecurityTrustHtml(html);
        this.loading = false;
      },
      error => {
        console.error('There was an error fetching the README', error);
        this.error = 'There was an error fetching the README';
        this.loading = false;
      }
    );
  }

}