import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { SummariesOBJ } from './summaries';
import { Summary } from './summary';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent{
  title = 'AngularDz6';
  Summaries: Summary[] = SummariesOBJ;
}
