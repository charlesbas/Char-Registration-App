import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { REG } from 'src/REG';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css'],
})
export class RegFormComponent implements OnInit {
  @Output() onNewReg: EventEmitter<REG> = new EventEmitter();
  firstname: string = '';
  lastname: string = '';
  date: string = '';
  sex: string = '';
  email: string = '';
  phone: string = '';
  hasPaid: boolean = false;
  paid: Date = new Date();
  showRegList?: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showRegList = value));
  }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.firstname) {
      alert('Please enter registration details');
      return;
    }

    const newRegister = {
      firstname: this.firstname,
      lastname: this.lastname,
      date: this.date,
      sex: this.sex,
      email: this.email,
      phone: this.phone,
      hasPaid: this.hasPaid,
      paid: this.paid = new Date()
    };

    this.onNewReg.emit(newRegister);
    this.firstname = '';
    this.lastname = '';
    this.date = '';
    this.sex = '';
    this.email = '';
    this.phone = '';
    this.hasPaid = false;
    this.paid = new Date();
  }
}