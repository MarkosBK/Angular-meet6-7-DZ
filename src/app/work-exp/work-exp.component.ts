import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { SummariesOBJ } from '../summaries';
import { Summary } from '../summary';

@Component({
  selector: 'app-work-exp',
  templateUrl: './work-exp.component.html',
  styleUrls: ['./work-exp.component.scss']
})
export class WorkExpComponent implements OnInit {
  @Input() apptype: Summary;
  constructor() { }
  Summaries:Summary[] = SummariesOBJ;
  ngOnInit(): void {
  }

}
