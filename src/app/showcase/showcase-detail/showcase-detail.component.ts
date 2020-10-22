import { Component, OnInit } from '@angular/core';
import { ShowcaseService } from '../showcase.service';
import { IWork } from '../work';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pdn-showcase-detail',
  templateUrl: './showcase-detail.component.html',
  styleUrls: ['./showcase-detail.component.scss', '../showcase.component.scss']
})
export class ShowcaseDetailComponent implements OnInit {
  private _work: IWork;
  showcase: IWork;
  id: string = '';

  constructor(private _showcaseService: ShowcaseService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this._showcaseService.getWorkItem(this.id).subscribe( (work:IWork) => {
      this._work = work;
      this.showcase = Object.assign([], this._work[0]);
      console.log(this.showcase);
    });
  }

}
