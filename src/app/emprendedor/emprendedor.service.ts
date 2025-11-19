import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Emprendedor } from './emprendedor';

import { environment } from '../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class EmprendedorService {
  private urlBase = environment.baseUrl;



      constructor(private http: HttpClient) { }

        getEmprendedores(): Observable<Emprendedor[]> {

          return this.http.get<Emprendedor[]>(this.urlBase+"emprendedores.json");

        }

      getEmprendedor(id:number): Observable<Emprendedor>{

          return this.http.get<Emprendedor>(this.urlBase + id.toString() + "/emprendedores.json");

      }

  }

