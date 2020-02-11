import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Proprietarios } from '../../cadastros/proprietarios/proprietarios';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BackendProprietariosService {

  readonly apiUrlTemplates = environment.api;

  private apiPathProprietario = `${this.apiUrlTemplates}/api/proprietarios`;

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Proprietarios[]>{
    return this.http.get(this.apiPathProprietario).pipe(
      catchError(this.handleError),
      map(this.jsonDataToProprietarios)
    )
  }

  getById(id:number): Observable<Proprietarios> {
    const url = `${this.apiPathProprietario}/${id}`;
    return this.http.get(url).pipe(
      catchError(this.handleError),
      map(this.jsonDataToProprietario)
    );
  }

  create(proprietario:Proprietarios): Observable<any> {
    return this.http.post(this.apiPathProprietario, proprietario).pipe(
      catchError(this.handleError),
      map(this.jsonDataToProprietario)
    );
  }

  update(proprietario:Proprietarios): Observable<any> {
    const url = `${this.apiPathProprietario}/${proprietario.id}`;
    return this.http.put(url, proprietario).pipe(
      catchError(this.handleError),
      map(() => proprietario)
    );
  }

  delete(id:number): Observable<any> {
    const url = `${this.apiPathProprietario}/deleteById/${id}`;
    return this.http.delete(url).pipe(
      catchError(this.handleError),
      map(() => null)
    )
  }

  // private methods

  private jsonDataToProprietarios(jsonData: any[]): Proprietarios[] {
    const proprietarios: Proprietarios[] = [];
    jsonData.forEach(element => proprietarios.push(element as Proprietarios));
    return proprietarios;
  }

  private jsonDataToProprietario(jsonData: any): Proprietarios {
    return jsonData as Proprietarios;
  }

  private handleError(error: any): Observable<any>{
    console.log('Error en la requisicion => ', error);
    return throwError(error);
  }
}
