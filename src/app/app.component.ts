import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ThanksModalComponent } from './components/shared/thanks-modal/thanks-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    contitle = 'foss-btcillustrated';
    
    constructor(public dialog: MatDialog) {}
  
    showModal = false;

    ngOnInit(): void {
      setTimeout(() => {
        this.showModal = true;
      }, 5000);
    }
  }