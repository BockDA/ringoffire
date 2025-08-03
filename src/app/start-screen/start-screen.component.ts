import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import * as firebase from 'firebase/compat';
import { Game } from 'src/models/game';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent {

  constructor(private firestore:AngularFirestore,public dialog:MatDialog,  private router: Router ){}

   newGame() {
     //Start Game
     let game = new Game();
      this.firestore
      .collection('games')
        .add(game.toJson())
        .then((gameInfo:any) => {
         this.router.navigateByUrl('/game/'+ gameInfo.id); 
     })

  }
}
