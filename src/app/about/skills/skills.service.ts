import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISkill } from './skills';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private _http: HttpClient) { }
  
  getSkills(): Observable<ISkill[]>{
    return this._http.get<ISkill[]>(environment.apiUrl+'getSkills.php');
  }
}
