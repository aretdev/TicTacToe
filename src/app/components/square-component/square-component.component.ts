import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'square',
  template: `
            <button class="playable-btn" [ngClass]="{'playerO': this.value === 'O', 'playerX': this.value === 'X'}" 
            [innerHTML]="this.formattedValue">
            </button>
  `,
  styleUrls: ['./square-component.component.css']
})
export class SquareComponentComponent implements OnInit {

  @Input() value: 'X' | 'O';

  formattedValue: String;
  constructor() { }

  ngOnInit(): void {
    switch(this.value) {
      case 'X':
        this.formattedValue = "<i class='bi bi-x'></i>";
        break;
      case 'O':
        this.formattedValue = "<i class='bi bi-circle'></i>";
        break;
      default:
        this.formattedValue = 'N'
        break;
    }
  }

}
