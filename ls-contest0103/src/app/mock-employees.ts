import { Employee } from './employee';

export const employees: Employee[] = [];

for (let i=0; i<localStorage.length; i++) {
    let item = JSON.parse(localStorage.getItem(i.toString()));
    let employee: Employee = item;
    employees.push(employee);
}