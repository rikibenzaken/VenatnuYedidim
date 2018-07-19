import { Component, OnInit } from '@angular/core';
import { Meeting } from '../../classes/meeting';
import { AppProxy } from '../../services/app.proxy';
import { StudentMeetingDetailsComponent } from '../student-meeting-details/student-meeting-details.component';

@Component({
  selector: 'app-student-meetings',
  templateUrl: './student-meetings.component.html',
  styleUrls: ['./student-meetings.component.css']
})
export class StudentMeetingsComponent implements OnInit {
  iMeetingId:number;

  constructor(private appProxy:AppProxy) { }
  meetingList:Meeting[];
  id:number;
 meeting:Meeting;
 flag:number;
 //this.meeting.iMeetingType=4;;
//  {iMeetingType:4,iPersonId:1,dtMeetingDate:7-9-2018,};

  // meetingList:Meeting[]=new Meeting[6];
  ngOnInit() {
    this.appProxy.post("GetMeetingsByStudentId",{iPersonId:1}).then(
      data=>
      {
        alert("good");
    this.meetingList=data;
    debugger;
    },
      err=>{
        alert("not good");
        }
    );
  }

}
