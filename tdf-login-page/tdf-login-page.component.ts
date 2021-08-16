import { prepareSyntheticListenerFunctionName } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee} from '../employee'
@Component({
  selector: 'app-tdf-login-page',
  templateUrl: './tdf-login-page.component.html',
  styleUrls: ['./tdf-login-page.component.css']
})
export class TdfLoginPageComponent implements OnInit {
  name:string=""
  msg:string="";
  b1:string="Login";
  b2:string="Sign Up"
  flag:boolean = false;
  flag1:boolean = false; //Registration form
  pname:string=""
	stdNames:Array<string>=[];
  employees:Array<Employee>=new Array();
  firstName:string="";
  id:string=""
  constructor() {



    // let emp1 = new Employee(100,"Raj",12000);
    // let emp2 = new Employee(101,"Raju",14000);
    // let emp3 = new Employee(103,"Ramesh",16000);
    // this.employees.push(emp1);
    // this.employees.push(emp2);
    // this.employees.push(emp3);
   }
  ngOnInit(): void {
  }

  toggle1(){
    if(this.flag1){
      this.flag1=false;
      this.b2 = "Register/Sign Up";
    }else {
      this.flag1=true;
      this.b2 = "Hide";
    }
}


  toggle(){    
    
    if(this.flag){
      this.flag=false;
      this.b1 = "Login";
    }else {
      this.flag=true;
      this.b1 = "Hide";
    }
}

passValue1(nameRef1:any,idRef:any){
this.id = idRef.value;
this.firstName = nameRef1.value;
this.stdNames.push(this.firstName,this.id)
}

passValue(nameRef:any)
{
  this.pname= nameRef.value;
}
  checkUser(loginRef:NgForm){
    let login = loginRef.value;
    //console.log(login);
    if(login.user=="Raj" && login.pass=="123"){
        this.msg = "Successfully Login!"
        this.toggle();
        
    }else {
        this.msg = "Incorrect username or password!!!";
        this.toggle1();
    }
    loginRef.reset();
  }
}

