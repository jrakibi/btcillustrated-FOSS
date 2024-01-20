export interface Exercise {
    id: number;
    title: string;
    overview?: string; // Brief overview of the exercise
    detailedDescription?: string; // Full description of what the exercise entails
    difficulty?: 'Easy' | 'Medium' | 'Hard';
    categories?: string[]; // Categories like 'Scavenger Hunt', 'Lightning Network', 'Wallet Project'
    instructions?: string; // General instructions applicable to all exercises
    setup?: string; // Any setup instructions specific to the exercise
    hints?: string[]; // Hints to help solve the exercise
    resources?: Resource[]; // Additional resources (e.g., docs, tools)
    submissionRequirements?: SubmissionRequirement[]; // Details on what needs to be submitted
    rpcInformation?: RPCInformation; // For exercises requiring Bitcoin node RPC interaction
    scavengerHuntQuestions?: ScavengerHuntQuestion[]; // Specific to scavenger hunts
    walletProjectDetails?: WalletProjectDetails; // Specific to wallet projects
    evaluationCriteria?: string; // How the submission will be evaluated
    templateFiles?: string[]; // Any starter template files provided
    relatedTopics?: string[]; // Topics related to the exercise
    creationDate?: Date; // When the exercise was created
  }
  
  export interface SubmissionRequirement {
    type: 'Script' | 'Text' | 'Code';
    description: string;
    fileName?: string; // Required if type is 'Script' or 'Code'
  }
  
  export interface Resource {
    type: 'Documentation' | 'Tool' | 'Article';
    title: string;
    url: string;
  }
  
  export interface RPCInformation {
    rpcServer: string;
    rpcCredentials: { username: string; password: string };
    usageExamples: string[];
  }
  
  export interface ScavengerHuntQuestion {
    questionId: string;
    question: string;
    solutionType: 'SingleCommand' | 'MultipleCommands' | 'ScriptWithLogic';
    additionalInfo?: string;
  }
  
  export interface WalletProjectDetails {
    walletDescriptors: string[];
    signetDetails: SignetDetails;
    transactionDetails: TransactionDetails;
  }
  
  export interface SignetDetails {
    networkAddress: string;
    configuration: string;
  }
  
  export interface TransactionDetails {
    version: number;
    inputSequence: number;
    lockTime: number;
    scriptSig: string;
    sighashFlag: number;
  }
  