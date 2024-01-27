export interface Exercise {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  toolsRequired: string[];
  submissionInstructions: string;
  example?: string;
  templateFilePath: string;
  questions: Question[];
}

export interface Question {
  id: string;
  title: string;
  isLink: boolean;
  content?: string;
  contentPath?: string
  answerType: 'single-line' | 'multi-line' | 'code';
  expectedOutput?: string;
  codeMetadata?: CodeMetadata;
  solutionCode?: string;
  hints?: string[]
  examplesPath: string[]
}

export interface CodeMetadata {
  language: string;
  starterCode?: string; // Optional starter code
  validatorFunction: string; // Name of the function that validates the answer
  additionalFiles?: string[]; // Any additional files needed for this question
}