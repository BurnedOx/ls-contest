import { Injectable } from '@angular/core';
import { Employee } from '../employee';
import { employees } from '../mock-employees';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(): Employee[] {
    return employees;
  }

  deleteEmployee(index: number): void {
    employees.splice(index, 1);
    localStorage.removeItem(index.toString());
    for (let i=index; i<localStorage.length; i++) {
      let temp = localStorage.getItem((i+1).toString());
      localStorage.removeItem((i+1).toString());
      localStorage.setItem((i).toString(), temp);
    }
  }

  addEmployee(employee: Employee): void {
    employees.push(employee);
    localStorage.setItem(localStorage.length.toString(), JSON.stringify({
      name: employee.name,
      gender: employee.gender,
      age: employee.age,
      designation: employee.designation,
      department: employee.department,
      joiningDate: employee.joiningDate,
      available: employee.available
    }))
  }

  editEmployee(employee: Employee, index: number): void {
    localStorage.setItem(index.toString(), JSON.stringify({
      name: employee.name,
      gender: employee.gender,
      age: employee.age,
      designation: employee.designation,
      department: employee.department,
      joiningDate: employee.joiningDate,
      available: employee.available
    }))
  }
}
