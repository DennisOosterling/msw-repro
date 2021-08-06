import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeServiceService {
  constructor(private httpClient: HttpClient) {}

  public fakeCall = (): Observable<any> => {
    return this.httpClient.get<any>('http://api.mock/fakerequest');
  };
}
