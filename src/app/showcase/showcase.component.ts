import { Component, OnInit } from '@angular/core';
import { IWork } from './work';
import { ShowcaseService } from './showcase.service';

@Component({
  selector: 'pdn-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {
  private _work: IWork[];
  showcase: IWork[];
  test: IWork;

  constructor(private _showcaseService: ShowcaseService) { 
    this._showcaseService.getWork().subscribe( (work:IWork[]) => {
      this._work = work;
      console.log(this._work);
      this.showcase = Object.assign([], this._work);
      console.log(this.showcase);
      this.showcase.sort((a:IWork, b:IWork) => {
        if(a.id < b.id) return 1;
        if(a.id > b.id) return -1;
        return 0;
      })
    });
  }

  ngOnInit(): void { }

}
