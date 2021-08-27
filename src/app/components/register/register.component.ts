import { RegService } from './../../services/reg.service';
import { Component, OnInit } from '@angular/core';
import { REG } from 'src/REG';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  regs: REG[] = [];
  
  constructor(private regService: RegService) {
  }

  ngOnInit(): void {
    this.regService
      .getList()
      .subscribe((listReturn) => (this.regs = listReturn));
  }

  deleteReg(statToDelete: REG) {
    this.regService
      .deleteReg(statToDelete)
      .subscribe(
        () => (this.regs = this.regs.filter((t) => t.id !== statToDelete.id))
      );
  }

  paymentStat(togglePaymentStat: REG) {
    togglePaymentStat.hasPaid = !togglePaymentStat.hasPaid;
    this.regService
      .updateList(togglePaymentStat)
      .subscribe(
        () =>(this.regs = this.regs.sort((a:REG, b:REG) => {if(a.paid < b.paid) return -1;
          else if(a.paid > b.paid) return 1;
          else return 0;} ))
      );return this.regs;
  }
  addNewReg(reg: REG) {
    this.regService.addToList(reg).subscribe((reg) => this.regs.push(reg)) 
  }
}
