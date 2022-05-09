import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  title = "Code With osa";
  address = "code c#";
  addresess = [];
  number = 0;
  names = ["osama", "sleman", "azbarga", "ahmed"]
  cssClass = "btn btn-danger";
  gender = true;


  customers =
    [
      { id: "123456", name: "osama", age: 26, gender: "male" },
      { id: "123457", name: "ahmed", age: 15, gender: "male" },
      { id: "123458", name: "nedaa", age: 22, gender: "female" },
      { id: "123459", name: "dadada", age: 23, gender: "male" },
      { id: "123460", name: "mosa", age: 21, gender: "male" },
    ]


  family =
    [
      { id: "56", name: "osama", age: 26, children:["kamel","farah","lmees"] },
      { id: "57", name: "ahmed", age: 15, children: ["mohmmed", "osama", "mrem"] },
      { id: "58", name: "nedaa", age: 22, children: ["walla", "ahmed", "fhem"] },
      { id: "59", name: "dadada", age: 23, children: ["salm", "slman", "sameh"] },
      { id: "60", name: "mosa", age: 21, children: ["saad", "lamaa", "youseef"] },

    ]
  toggle = true;
  text="close";

  changeTitle() {
    this.title = "osama";
  }
  incrementCount() {
    this.number += 1;
  }
  addName() {
    this.customers.push({id:"123461",name:"khaled",age:30,gender:"male"})
  }
  changeToggle() {
    this.toggle = !this.toggle;
    this.text = this.toggle ? "close" : "open";
  }

  changeAddress() {
    this.address = "osama";
  }

  addAddress() {
    this.addresess.push(this.address)
    console.log(this.addresess)
  }


}
