import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { REG } from 'src/REG';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register-list',
  templateUrl: './register-list.component.html',
  styleUrls: ['./register-list.component.css'],
})
export class RegisterListComponent implements OnInit {
  @Input() regList?: REG;
  faTimes = faTimes;
  @Output() onTogglePaid: EventEmitter<REG> = new EventEmitter();
  @Output() onDeleteReg: EventEmitter<REG> = new EventEmitter();
  constructor() {}
  
  onToggle(HasPaid?: REG) {
    this.onTogglePaid.emit(HasPaid);
  }

  ngOnInit(): void {}

  onDelete(statToDelete?: REG) {
    this.onDeleteReg.emit(statToDelete);
  }
}
