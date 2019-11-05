import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  @Output()
  modalEvent = new EventEmitter();

  employees: Employee[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  editEmployee(employee: Employee, index: number): void {
    this.modalEvent.emit({type: 'Edit', employee: employee, index: index});
  }

  getEmployees(): void {
    this.employees = this.employeeService.getEmployees();
  }

  deleteEmployee(index: number) {
    console.log(index);
    this.employeeService.deleteEmployee(index);
  }

  changeAvailbility(employee: Employee, index: number): void {
    employee.available = !employee.available;
    let temp = JSON.parse(localStorage.getItem(index.toString()));
    temp.available = !temp.available;
    localStorage.setItem(index.toString(), JSON.stringify(temp));
  }

}
