import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IWork } from './work';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShowcaseService {

  constructor(private _http: HttpClient) { }

  getWork(): Observable<IWork[]>{
    return this._http.get<IWork[]>(environment.apiUrl+'getWork.php');
  }
  getWorkItem(id): Observable<IWork>{
    console.log("getWorkItems id: "+id);
    return this._http.get<IWork>(environment.apiUrl+'getWorkItem.php', {params: { id:  id }});
  }
}
