import { Component, OnInit } from '@angular/core';
import { Exercise } from 'src/app/models/exercise.model';

@Component({
  selector: 'app-coding',
  templateUrl: './coding.component.html',
  styleUrls: ['./coding.component.css']
})
export class CodingComponent {


  currentExercise: Exercise = {
    // ...other exercise properties
    id: 2,
    title: 'PC Scavenger Hunt',
    detailedDescription: 'Interact with a synced mainnet full node using bitcoin-cli.',
    hints: [
      'Use bitcoin-cli help to explore available commands.',
      'You may need jq to parse JSON output.'
    ],
    rpcInformation: {
      rpcServer: '35.209.148.157',
      rpcCredentials: {
        username: 'a_plus_student',
        password: 'hunter2'
      },
      usageExamples: [
        'bitcoin-cli -rpcconnect=35.209.148.157 -rpcuser=a_plus_student -rpcpassword=hunter2 getblockcount'
      ]
    },
    scavengerHuntQuestions: [
      {
        questionId: '001.sh',
        question: 'What is the hash of block 654,321?',
        solutionType: 'SingleCommand'
      },
      // ...more questions
    ]
    // ...other fields as needed
  };


  // isLoading: boolean = false ; // Initialize as true to show the loader initially
  // code: string = '// Type your code here';
  // selectedLanguage: string = 'javascript'; // default language
  // languages: string[] = ['javascript', 'python', 'typescript', 'java', 'csharp']; // add more languages as needed
  // editorOptions = { theme: 'vs-dark', language: this.selectedLanguage };

  // onEditorInit(editor: any) {
  //   // You can now access the monaco editor instance
  // }

  // loadExercise(difficulty: string) {
  //   // Load the exercise based on the difficulty
  //   console.log(`Loading ${difficulty} exercise`);
  //   // Here you would set the exercise content based on the difficulty
  // }

  // changeLanguage() {
  //   // Change the language of the editor
  //   console.log(`Changing language to ${this.selectedLanguage}`);
  //   this.editorOptions = { ...this.editorOptions, language: this.selectedLanguage };
  //   // You would also handle the editor configuration for the selected language
  // }

  isLoading: boolean = false;
  code: string = '// Type your code here';
  selectedLanguage: string = 'rust'; // default to 'rust'
  languages: string[] = ['rust', 'go', 'cpp', 'shell']; // updated languages
  editorOptions = { theme: 'vs-dark', language: this.selectedLanguage };
  // currentExercise: Exercise; // Property to hold the current exercise
  
  // exercises: Exercise[] = [
  //   // Populate with random data for testing
  //   {
  //     id: 1,
  //     difficulty: 'easy',
  //     description: 'Easy level exercise description...',
  //     exampleImageUrl: 'example-easy.png'
  //   },
  //   {
  //     id: 2,
  //     difficulty: 'medium',
  //     description: 'What is the hash of block 654,321?',
  //     exampleImageUrl: 'example-medium.png'
  //   },
  //   {
  //     id: 3,
  //     difficulty: 'hard',
  //     description: 'Hard level exercise description...',
  //     exampleImageUrl: 'example-hard.png'
  //   }
  //   // Add more exercises as needed
  // ];

  constructor() {
    // Initialize the currentExercise with the first exercise as a default
    // this.currentExercise = this.exercises[0];
  }

  onEditorInit(editor: any) {
    // Access the Monaco editor instance
  }

  loadExercise(difficulty: string) {
    // Find an exercise with the given difficulty
    // const exercise = this.exercises.find(ex => ex.difficulty === difficulty);
    // if (exercise) {
    //   this.currentExercise = exercise;
    //   // Additional logic to update the editor content can be added here
    //   console.log(`Loading ${difficulty} exercise`);
    // } else {
    //   console.log(`No ${difficulty} exercise found`);
    // }
  }

  changeLanguage() {
    console.log(`Changing language to ${this.selectedLanguage}`);
    this.editorOptions = { ...this.editorOptions, language: this.selectedLanguage };
    // Additional logic to handle language-specific editor configurations
  }
}
