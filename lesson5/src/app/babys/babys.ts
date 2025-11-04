import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ClassBabys } from '../moduls/ClassBabys';

@Component({
  selector: 'app-babys',
  standalone: true,
  imports: [],
  templateUrl: './babys.html',
})
export class Babys {
  @Input() babyDetails!: ClassBabys;
  @Output() removeItemEvent = new EventEmitter<ClassBabys>();

  removeItem() {
    this.removeItemEvent.emit(this.babyDetails);
  }
}
