import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { SummariesOBJ } from '../summaries';
import { Summary } from '../summary';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  @Input() apptype: Summary;
  constructor() { }
  Summaries:Summary[] = SummariesOBJ;
  ngOnInit(): void {
  }

}
