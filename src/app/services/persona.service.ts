import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { persona } from '../interfaces/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private myAppUrl: string =  environment.endpoint;
  private myApiUrl: string = 'api/Dato/';

  constructor(private http: HttpClient) { }


  getDatos(): Observable<persona[]>{

  return this.http.get<persona[]>(`${this.myAppUrl}${this.myApiUrl}`);

  }

  getDato(id:number): Observable<persona>{

    return this.http.get<persona>(`${this.myAppUrl}${this.myApiUrl}`);

  }






  }
