import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  // Generic method to fetch data from a given JSON file path
  public fetchData<T>(jsonFilePath: string): Observable<T> {
    return this.httpClient.get<T>(jsonFilePath);
  }

  loadReadme(githubLink: string) {
    const readmeUrl = githubLink;
    this.httpClient.get(readmeUrl, { responseType: 'text' }).subscribe(
      data => {
        // This will print the markdown content of README.md
        console.log(data);
      },
      error => {
        console.error('There was an error fetching the README', error);
      }
    );
  }
}
