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
      this.checkDeviceSize();

      setTimeout(() => {
        this.showModal = true;
      }, 5000);
    }



    title = 'BTC Illustrated';
    isMobile: boolean = false;
    showMobileWarning: boolean = true;
    showHeader = true;
  
  
    checkDeviceSize() {
      const mobileBreakpoint = 768; // You can adjust this value
      this.isMobile = window.innerWidth < mobileBreakpoint;
      this.showMobileWarning = this.isMobile; // Show warning initially only on mobile
    }
  
    continueAnyway() {
      this.showMobileWarning = false; // Hide mobile warning and show platform content
    }
  
    hideHeader() {
      this.showHeader = false;
    }
  }