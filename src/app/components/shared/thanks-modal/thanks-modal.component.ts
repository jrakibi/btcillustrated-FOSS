import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-thanks-modal',
  templateUrl: './thanks-modal.component.html',
  styleUrls: ['./thanks-modal.component.css']
})
export class ThanksModalComponent {
  @Input() show!: boolean;
  @Output() showChange = new EventEmitter<boolean>();

  close() {
    this.show = false;
    this.showChange.emit(this.show);
  }

  closeModal2(event?: MouseEvent) {
    // Check if the click event is available and it is on the modal backdrop
    if (!event || (event && event.target === event.currentTarget)) {
      this.show = false;
    this.showChange.emit(this.show);

    }
  }
  
}
