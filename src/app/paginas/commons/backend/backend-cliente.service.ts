import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Clientes } from '../../cadastros/clientes/clientes';
import { Observable, throwError } from 'rxjs';
import { map, catchError, flatMap } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  readonly apiUrlTemplates = environment.api;

  private apiPathCliente = `${this.apiUrlTemplates}/api/clientes`;

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Clientes[]>{
    return this.http.get(this.apiPathCliente).pipe(
      catchError(this.handleError),
      map(this.jsonDataToClientes)
    )
  }

  getById(id:number): Observable<Clientes> {
    const url = `${this.apiPathCliente}/${id}`;
    return this.http.get(url).pipe(
      catchError(this.handleError),
      map(this.jsonDataToCliente)
    );
  }

  create(cliente:Clientes): Observable<any> {
    return this.http.post(this.apiPathCliente, cliente).pipe(
      catchError(this.handleError),
      map(this.jsonDataToCliente)
    );
  }

  update(cliente:Clientes): Observable<any> {
    const url = `${this.apiPathCliente}/${cliente.id}`;
    return this.http.put(url, cliente).pipe(
      catchError(this.handleError),
      map(() => cliente)
    );
  }

  delete(id:number): Observable<any> {
    const url = `${this.apiPathCliente}/deleteById/${id}`;
    return this.http.delete(url).pipe(
      catchError(this.handleError),
      map(() => null)
    )
  }

  // private methods

  private jsonDataToClientes(jsonData: any[]): Clientes[] {
    const clientes: Clientes[] = [];
    jsonData.forEach(element => clientes.push(element as Clientes));
    return clientes;
  }

  private jsonDataToCliente(jsonData: any): Clientes {
    return jsonData as Clientes;
  }

  private handleError(error: any): Observable<any>{
    console.log('Error en la requisicion => ', error);
    return throwError(error);
  }
}
