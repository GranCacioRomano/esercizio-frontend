import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Residenza } from '../models/residenza.model';
import { Persona } from '../models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class ResidenzaService {
  private apiUrl = 'http://localhost:8080/api/v1/residenza';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Residenza[]> {
    return this.http.get<Residenza[]>(this.apiUrl);
  }
  getById(id: number): Observable<Residenza> {
    return this.http.get<Residenza>(`${this.apiUrl}/${id}`);
  }
  create(residenza: Residenza): Observable<Residenza> {
    return this.http.post<Residenza>(this.apiUrl, residenza);
  }
  update(id: number, residenza: Residenza): Observable<Residenza> {
    return this.http.put<Residenza>(`${this.apiUrl}/${id}`, residenza);
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  getPersoneByIndirizzo(indirizzo: string): Observable<Persona[]> {
    return this.http.get<Persona[]>(`${this.apiUrl}/persone?indirizzo=${indirizzo}`);
  }
}
