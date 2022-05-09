import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  ssn;
  name;
  address;
  gender;
  age;
  customers = [];
  addCustomer() {
    this.customers.push({ ssn: this.ssn, name: this.name, address: this.address, age: this.age, gender: this.gender?"Male":"Female" });
    console.log(this.customers);
  }

}
