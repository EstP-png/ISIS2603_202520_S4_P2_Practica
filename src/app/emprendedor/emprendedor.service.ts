import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Emprendedor } from './emprendedor';

import { environment } from '../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class EmprendedorService {
  private url = environment.baseUrl;


  constructor() { }
}
