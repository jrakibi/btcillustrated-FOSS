import { Component, OnInit } from '@angular/core';

interface Resource {
  id: number;
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  type: 'video' | 'article' | 'book';
}
@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css']
})
export class ReferencesComponent implements OnInit {
  resources: Resource[] = [
    {
      id: 1,
      title: 'Understanding Bitcoin Core and RPC',
      description: 'A video guide on how Bitcoin Core interacts with the RPC interface.',
      url: 'https://www.example.com/videos/bitcoin-core-rpc',
      imageUrl: 'https://via.placeholder.com/150',
      type: 'video'
    },
    {
      id: 2,
      title: 'Mastering Bitcoin Core',
      description: 'An insightful article on the intricacies of Bitcoin Core.',
      url: 'https://www.example.com/articles/mastering-bitcoin-core',
      imageUrl: 'https://via.placeholder.com/150',
      type: 'article'
    },
    {
      id: 2,
      title: 'Mastering Bitcoin Core',
      description: 'An insightful article on the intricacies of Bitcoin Core.',
      url: 'https://www.example.com/articles/mastering-bitcoin-core',
      imageUrl: 'https://via.placeholder.com/150',
      type: 'article'
    },
    {
      id: 3,
      title: 'Bitcoin Programming',
      description: 'Comprehensive book covering all aspects of Bitcoin programming.',
      url: 'https://www.example.com/books/bitcoin-programming',
      imageUrl: 'https://via.placeholder.com/150',
      type: 'book'
    },
    {
      id: 3,
      title: 'Bitcoin Programming',
      description: 'Comprehensive book covering all aspects of Bitcoin programming.',
      url: 'https://www.example.com/books/bitcoin-programming',
      imageUrl: 'https://via.placeholder.com/150',
      type: 'book'
    },
    {
      id: 3,
      title: 'Bitcoin Programming',
      description: 'Comprehensive book covering all aspects of Bitcoin programming.',
      url: 'https://www.example.com/books/bitcoin-programming',
      imageUrl: 'https://via.placeholder.com/150',
      type: 'book'
    }
    // Add more random resources as needed
  ];
  filteredResources: Resource[] = [];
  activeCategory: 'all' | 'video' | 'article' | 'book' = 'all';

  constructor() {}

  ngOnInit() {
    this.filteredResources = this.resources;
  }

  filterResources(category: 'all' | 'video' | 'article' | 'book') {
    this.activeCategory = category;
    this.filteredResources = this.resources.filter(resource => category === 'all' || resource.type === category);
  }
}