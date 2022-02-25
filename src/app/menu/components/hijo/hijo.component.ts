import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  @Output() value2: EventEmitter<string> = new EventEmitter();
  @Input() value: string = '';

  dataWd: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  values(event: any){
    this.value2.emit(event);
  }

  

}
