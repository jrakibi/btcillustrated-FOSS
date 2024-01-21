export interface Tag {
  label: string;
  iconUrl?: string; // Optional property if you want icons for tags.
}

export interface Reference {
  thumbnailUrl: string;
  title: string;
  description: string;
  buttonText: string;
  tags: Tag[]; // Now using the Tag interface array instead of string array.
  categoryIconUrl: string;
  learnMoreLink: string;
  color: string;
}
