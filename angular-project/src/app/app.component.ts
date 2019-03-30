import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-project';
score: number=49;
name: string = "Pang";

student: any ={
  name:"Nanthanat",
  studentId: "5921602612", 
  weight: 40,
  hight: 150
}
studentlist: any=[{
  name:"Nanthanat",
  studentId: "5921602612", 
  weight: 40,
  hight: 150
},
{
  name:"Nanthanat",
  studentId: "5921602612", 
  weight: 40,
  hight: 150
}];
constructor(){
  
  this.student.bmi = (this.student.weight/((this.student.hight/100)*(this.student.hight/100))).toFixed(2);


  this.studentlist.map((object,index)=>{
    let obj: any = object;
    obj.bmi = (object.weight/((object.hight/100)*(object.hight/100))).toFixed(2);
    return obj;
  })
 console.log(this.studentlist);
}
}
