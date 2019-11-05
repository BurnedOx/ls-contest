import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input()
  opType: string;
  @Input()
  index: number;
  @Input()
  employee: Employee;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  addEmployee(): void {
    this.employee.available = true;
    this.employeeService.addEmployee(this.employee);
    this.employee = new Employee();
  }

  editEmployee(): void {
    this.employeeService.editEmployee(this.employee, this.index);
  }

}
