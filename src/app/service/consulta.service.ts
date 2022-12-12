import { Consultas } from './../models/consultas';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ConsultaService {
    
  URL = environment.URL;

  constructor(private http: HttpClient) { }
  
  guardarConsulta(consulta: Consultas): Observable<any> {
    return this.http.post(this.URL, consulta)
  }
  
}
