import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css'],
})
export class SquareComponent {
  @Input() value: 'X' | 'O' | undefined;
  @Input() boardsStrike: number[] = [];
  @Input() index: number = 0;
  @Input() winner : string | null ='';
  checkIndex(arr: number[], inx: number) {
    return arr.includes(inx);
  }
  constructor(){}

  
}
