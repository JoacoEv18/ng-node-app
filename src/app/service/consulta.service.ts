import { Consultas } from './../models/consultas';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ConsultaService {
  
  /* URL: string = 'https://app-node2-ng.herokuapp.com/api/' */
  
  /* URL = environment.URL; */

  constructor(private http: HttpClient) { }
  
  guardarConsulta(consulta: Consultas): Observable<any> {
    return this.http.post('https://app-node2-ng.herokuapp.com/api/', consulta)
  }
  
}
