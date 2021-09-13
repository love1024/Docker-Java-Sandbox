import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExecuteInput, ExecuteOutput } from './app.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private url = 'http://137.184.26.3:8080/compile';

  constructor(private http: HttpClient) { }

  executeCode(input: ExecuteInput): Observable<ExecuteOutput> {
    return this.http.post<ExecuteOutput>(this.url, input);
  }
}
