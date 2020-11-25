import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { SummariesOBJ } from '../summaries';
import { Summary } from '../summary';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})

export class ContactsComponent implements OnInit {
  @Input() apptype: Summary;
  Summaries:Summary[] = SummariesOBJ;
  ngOnInit(): void {
    
  }
}
