import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IWork } from './work';

@Injectable({
  providedIn: 'root'
})
export class ShowcaseService {

  constructor(private _http: HttpClient) { }

  getWork(): Observable<IWork[]>{
    return this._http.get<IWork[]>('http://localhost:8888/PdeNatris/2020/Backend/getWork.php');
  }
}
