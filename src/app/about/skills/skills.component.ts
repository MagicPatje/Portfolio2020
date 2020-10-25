import { Component, OnInit } from '@angular/core';
import { ISkill, skillCategory } from './skills';
import { SkillsService } from './skills.service';

@Component({
  selector: 'pdn-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  private _skill: ISkill[];
  skills: ISkill[];
  skillGroup1:ISkill[] = [];
  skillGroup2:ISkill[] = [];
  skillGroup3:ISkill[] = [];
  skillGroup4:ISkill[] = [];
  skillGroup5:ISkill[] = [];
  skillGroup6:ISkill[] = [];
  skillGroup7:ISkill[] = [];
  skillCategory = skillCategory;

  constructor(private _skillService: SkillsService) { 
    this._skillService.getSkills().subscribe( (skill:ISkill[]) => {
      this._skill = skill;
      console.log(this._skill);
      this.skills = Object.assign([], this._skill);
      console.log(this.skills);
      this.skills.forEach(e => {
        if(e.category === skillCategory[0]){ this.skillGroup1.push(e);}
        else if(e.category === skillCategory[1]){ this.skillGroup2.push(e);}
        else if(e.category === skillCategory[2]){ this.skillGroup3.push(e);}
        else if(e.category === skillCategory[3]){ this.skillGroup4.push(e);}
        else if(e.category === skillCategory[4]){ this.skillGroup5.push(e);}
        else if(e.category === skillCategory[5]){ this.skillGroup6.push(e);}
        else if(e.category === skillCategory[6]){ this.skillGroup7.push(e);}
      });
      // this.skills.sort((a:ISkill, b:ISkill) => {
      //   if(a.category < b.category) return 1;
      //   if(a.category > b.category) return -1;
      //   return 0;
      // })
    });
  }

  ngOnInit(): void {
  }

}
