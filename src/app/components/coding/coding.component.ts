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

  hints: any[] = [];
  readmeHtml: string = ''; // This will hold the HTML content for the README
  exampleHtml: string = ''; // This will hold the HTML content for the example
  
  loadQuestion(question: Question) {
    this.currentQuestion = question; // Set the current question
    this.code = question.codeMetadata?.starterCode || '// Type your code here'; // Load the code template if it exists
    
    // If the question requires a specific programming language, update the editor options
    if (question.codeMetadata?.language) {
      this.selectedLanguage = question.codeMetadata.language;
      this.editorOptions = { ...this.editorOptions, language: this.selectedLanguage };
    }
  
    // Load README or example content if paths are provided
    if (question.isLink && question.contentPath) {
      this.loadContent(question.contentPath, (content) => this.readmeHtml = content);
    }
    if (question.examplesPath && question.examplesPath.length > 0) {
      this.loadContent(question.examplesPath[0], (content) => this.exampleHtml = content);
    }
  
    this.hints = question.hints ?? [];
    this.hintsBlurred = this.hints.map(() => true); // Set all hints to blurred

    // Clear previous output
    this.output = '';
    console.log(`Loading question: ${question.id}`);
  }
  
  loadContent(path: string, setContent: (content: string) => void) {
    if (!path) return;
    this.http.get(path, { responseType: 'text' }).subscribe(
      markdown => {
        setContent(marked.parse(markdown) as string);
      },
      error => {
        console.error('There was an error fetching the content', error);
        setContent(''); // Reset the content on error
      }
    );
  }
  

  toggleOutputVisibility() {
    this.showOutput = !this.showOutput; // Toggle the boolean value
  }

  hintsBlurred: boolean[] = []; // Initialize with all hints blurred.

  // Method to toggle blur on and off for each hint.
// showHint(index: number): void {
//   const confirmUnblur = confirm('Would you like to show this hint?');
//   if (confirmUnblur) {
//     this.hintsBlurred[index] = !this.hintsBlurred[index]; // Toggle the blur state
//   }
// }
  unblurHint(hint: string): string {
    // Logic to unblur the hint, e.g., removing some placeholder or actual unblurring
    return hint; // Return the unblurred hint
  }
  


  isModalOpen: boolean = false;
  hintIndex: number = -1; // Index of the hint to potentially unblur
  
  // Call this method when a hint is clicked
  promptUnblurHint(index: number): void {
    this.hintIndex = index;
    this.isModalOpen = true;
  }
  
  // Call this method to toggle the hint's blur state
  toggleHint(index: number): void {
    this.hintsBlurred[index] = false;
    this.isModalOpen = false;
  }
  
}



