import { Component } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  modalOpType: string = '';
  employee: Employee = new Employee();
  index: number;

  changeModalState($event) {
    if(typeof $event === 'string') {
      this.modalOpType = $event;
      this.employee = new Employee();
    } else {
      this.modalOpType = $event.type;
      this.employee = $event.employee;
      this.index = $event.index;
    }
  }
}
