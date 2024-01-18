import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coding',
  templateUrl: './coding.component.html',
  styleUrls: ['./coding.component.css']
})
export class CodingComponent {
  isLoading: boolean = false ; // Initialize as true to show the loader initially
  code: string = '// Type your code here';
  selectedLanguage: string = 'javascript'; // default language
  languages: string[] = ['javascript', 'python', 'typescript', 'java', 'csharp']; // add more languages as needed
  editorOptions = { theme: 'vs-dark', language: this.selectedLanguage };

  onEditorInit(editor: any) {
    // You can now access the monaco editor instance
  }

  loadExercise(difficulty: string) {
    // Load the exercise based on the difficulty
    console.log(`Loading ${difficulty} exercise`);
    // Here you would set the exercise content based on the difficulty
  }

  changeLanguage() {
    // Change the language of the editor
    console.log(`Changing language to ${this.selectedLanguage}`);
    this.editorOptions = { ...this.editorOptions, language: this.selectedLanguage };
    // You would also handle the editor configuration for the selected language
  }
}
