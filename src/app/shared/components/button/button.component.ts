import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text!: string;
  @Input() classs!: string;
  @Output() clickFunction = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  onClick(event: any) {
    this.clickFunction.emit('true')
    console.log(event)
  }
}
