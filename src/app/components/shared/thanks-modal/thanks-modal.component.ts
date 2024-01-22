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
}
