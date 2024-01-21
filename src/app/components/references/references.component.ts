import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';


interface Reference {
  thumbnailUrl: string;
  title: string;
  description: string;
  author: string;
  authorIconUrl: string;
  tags: string[];
  type: string;
  referenceLink: string;
}

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css']
})
export class ReferencesComponent implements OnInit {
  references: Reference[] = [];
  loading: boolean = false;
  error: string = '';
  
  
  filteredReferences: Reference[] = [];
  activeCategory: string = 'all';

  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.filteredReferences = this.references;
    this.dataService.fetchData<any[]>('assets/data/week0/references/references.json').subscribe(
      data => {
        this.references = data;
        this.filteredReferences = this.references
        this.loading = false;
      },
      error => {
        this.error = 'Failed to load tools data.';
        this.loading = false;
      }
    );
  }

  filterResources(category: string) {
    this.activeCategory = category;
    this.filteredReferences = this.references.filter(reference => 
      category === 'all' || reference.type === category
    );
  }
}
