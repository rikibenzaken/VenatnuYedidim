import { Component, OnInit, OnDestroy, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppProxy } from '../../services/app.proxy';
import { Meeting } from '../../classes/meeting';

@Component({
  selector: 'app-student-meeting-details',
  templateUrl: './student-meeting-details.component.html',
  styleUrls: ['./student-meeting-details.component.css']
})
export class StudentMeetingDetailsComponent implements OnInit,OnDestroy {
  private sub: any;
// @Input() 
// protected meetingId:number;
@Output()
@Input()
protected meeting:Meeting;
  save(){
    if(this.meeting==null)
    this.meeting=new Meeting();
    this.appProxi.post("AddMeeting",{meeting:this.meeting,iUserId:1}).then(
      data=>
      {
        alert("good");
    debugger;
    },
      err=>{
        alert("not good");
        }
    );
  }

  constructor(private route: ActivatedRoute,private appProxi: AppProxy) { }
// subscription:Subscription;
  ngOnInit() {
    if(this.meeting==null)
    this.meeting=new Meeting();
  //  this.sub=this.route.params.subscribe(params=>{
  //    this.meetingId=+params['iMeetingId'];
  //  });
  debugger;

  }
  ngOnDestroy() {
    this.sub.unsubscribe();
    }
  
  

}
