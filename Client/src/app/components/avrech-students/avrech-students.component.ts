import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppProxy } from '../../services/app.proxy';
import { Student } from '../../classes/student';

@Component({
  selector: 'app-avrech-students',
  templateUrl: './avrech-students.component.html',
  styleUrls: ['./avrech-students.component.css']
})
export class AvrechStudentsComponent implements OnInit {
  @Output()
  flag: boolean = false;
  id: number;
  students: Student[];
  //מסוג סטודנט עם שליפה מהסרביס
  allStudents: any[] = [{ iPersonId: 1,nvFirstName: "chaim",nvLastName: "choen",nvIdentityCard:"123456789"},
  { iPersonId:2,nvFirstName: "yeoda",nvLastName: "levi",nvIdentityCard:"987654321"},
  { iPersonId: 3,nvFirstName: "pinchas",nvLastName: "lev",nvIdentityCard:"147258369"},
  { iPersonId: 4,nvFirstName: "rafi",nvLastName: "catz",nvIdentityCard:"963852741"},
  { iPersonId: 5,nvFirstName: "asher",nvLastName: "green",nvIdentityCard:"741852963"}];
  studentsToAdd: Array<any> = new Array<any>();
  constructor(private activatedRoute: ActivatedRoute, private appProxy: AppProxy) {
    
   }

  cancelAdd() {
    this.flag = false;
  }
  saveAdd() {
    debugger;
    //לקבל את הרשימה המסוננת
    let d = this.studentsToAdd;
    this.flag=false;
  }


  ngOnInit() {
    this.activatedRoute.parent.params.subscribe(params => {
     this.id= params['iPersonId'];
    }) 
  this.appProxy.post('GetAvrechStudents',{iPersonId:this.id}).then(data=>this.students=data
  ,err=>alert(err));
  }

  deleteStudent(id:number){
    this.appProxy.post('DeleteAvrechStudent',{iAvrechId:this.id,iStudentId:id},).then(data=>{
      if(data==true){    
      for(let i=0;i<this.students.length;i++)
      {
        if(this.students[i].iPersonId==id)
        this.students.splice(i,1);
        break;
      }
  }}
      ,err=>alert(err));
  }

}
