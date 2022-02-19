import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() num!: number;
  @Input() text!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
