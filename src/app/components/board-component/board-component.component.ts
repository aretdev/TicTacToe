import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'board',
  templateUrl: './board-component.component.html',
  styleUrls: ['./board-component.component.css']
})
export class BoardComponentComponent implements OnInit {


  boardSquared: any = [];
  winner: boolean;
  isPlayerONext: boolean;
  constructor() { }

  ngOnInit(): void {
    this.game();
  }

  public game(): void {
    this.winner = false;
    this.isPlayerONext = true;
    this.boardSquared = Array(9).fill(null);
  }
  clickSquare(id: number): void {
    if(!this.boardSquared[id] && !this.winner) {
      this.boardSquared.splice(id, 1, (this.isPlayerONext) ? 'O': 'X');
      console.log(this.boardSquared)
      this.winner = this.checkWinner(id);
      if(!this.winner){
        this.isPlayerONext = !this.isPlayerONext;
      }
    }
  }

  getPlayerIcon() {
    return (this.isPlayerONext) ?  "<i class='bi bi-circle'></i>" : "<i class='bi bi-x'></i>";
  }

  private checkWinner(id: number): boolean {
    let winnerLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6] 
    ];
    for(let i = 0; i < winnerLines.length; i++) {
      let [pos1, pos2, pos3] = winnerLines[i];
      if(this.boardSquared[pos1] &&
        this.boardSquared[pos1] === this.boardSquared[pos2] &&
        this.boardSquared[pos2] === this.boardSquared[pos3]) {
          return true
        }
    }
    return false;
  }
}
