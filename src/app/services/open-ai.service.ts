import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OpenaiService {
  private baseUrl: string = `${environment.apiUrl}/openai`;

  constructor(private http: HttpClient) { }

  askGPT(question: string): Observable<string> {
    if (!question?.trim()) {
      return throwError(() => new Error('The question is empty or null.'));
    }
    const url = `${this.baseUrl}/chat?prompt=${encodeURIComponent(question)}`;
    return this.http.get<string>(url, { responseType: 'text' as 'json' }); // Expecting text
  }


}
