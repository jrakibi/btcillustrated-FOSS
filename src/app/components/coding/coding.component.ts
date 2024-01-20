import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Exercise, Question } from 'src/app/models/exercise.model';
import { DataService } from 'src/app/services/data.service';
import * as marked from 'marked';

@Component({
  selector: 'app-coding',
  templateUrl: './coding.component.html',
  styleUrls: ['./coding.component.css']
})
export class CodingComponent implements OnInit {
  output: string = ''; // To display the output of the code execution
  currentQuestion: Question | null = null; // Holds the currently selected question
  isLoading: boolean = false;
  code: string = '// Type your code here';
  selectedLanguage: string = 'rust'; // default to 'rust'
  languages: string[] = ['rust', 'go', 'cpp', 'shell']; // updated languages
  editorOptions = { theme: 'vs-dark', language: this.selectedLanguage };
  weekNumber: number = 0
  loading: boolean = true; // Initialize as true to show the loading indicator
  currentExercise: Exercise | null = null
  error: string = '';
  readmeHtml!: string ; // This will hold the HTML content for the README
  showOutput: boolean = false; 

  constructor(
    private dataService: DataService,
    private http: HttpClient,
  ) {
    // Initialize the currentExercise with the first exercise as a default
    // this.currentExercise = this.exercises[0];
  }
  ngOnInit(): void {
    this.dataService.fetchData<any>('assets/data/week0/coding/coding.json').subscribe(
      data => {
        this.currentExercise = data
        this.loading = false;
        // Existing initialization logic
        debugger
        if(this.currentExercise) {
          this.loadQuestion(this.currentExercise.questions[0])
        }
      },
      error => {
        this.error = 'Failed to load problems data.';
        this.loading = false;
      }
    );
  }

  onEditorInit(editor: any) {
    // Access the Monaco editor instance
  }

  changeLanguage() {
    console.log(`Changing language to ${this.selectedLanguage}`);
    this.editorOptions = { ...this.editorOptions, language: this.selectedLanguage };
    // Additional logic to handle language-specific editor configurations
  }

  loadQuestion(question: Question) {
    this.currentQuestion = question; // Set the current question
    this.code = question.codeMetadata?.starterCode || '// Type your code here'; // Load the code template if it exists
    // If the question requires a specific programming language, update the editor options
    if (question.codeMetadata?.language) {
      this.selectedLanguage = question.codeMetadata.language;
      this.editorOptions = { ...this.editorOptions, language: this.selectedLanguage };
    }
    if (question.isLink && question.contentPath) {
      this.loadReadme(question.contentPath); // Load README if needed
    }
    // Clear previous output
    this.output = '';
    console.log(`Loading question: ${question.id}`);
  }
  

  loadReadme(path: string) {
    if (!path) return;
    this.http.get(path, { responseType: 'text' }).subscribe(
      markdown => {
        this.readmeHtml = marked.parse(markdown) as string;
      },
      error => {
        console.error('There was an error fetching the README', error);
        this.readmeHtml = ''; // Reset the content on error
      }
    );
  }

  toggleOutputVisibility() {
    this.showOutput = !this.showOutput; // Toggle the boolean value
  }
}
