export interface Problem {
  // title: string;
  // description: string;
  // hint?: string;
  // expectedSubmissions: string;
  title: string;
  overview: string;
  sections: Section[]
}

export interface Section {
  title: string;
  isLink: boolean;
  content?: string;
  path?: string 
}


