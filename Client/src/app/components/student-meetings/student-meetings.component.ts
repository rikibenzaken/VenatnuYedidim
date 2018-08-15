import { Component, OnInit } from '@angular/core';
import { Meeting } from '../../classes/meeting';
import { AppProxy } from '../../services/app.proxy';
import { StudentMeetingDetailsComponent } from '../student-meeting-details/student-meeting-details.component';
import { SysTableService } from '../../services/sys-table.service';
import { SysTableRow } from '../../classes/SysTableRow';



@Component({
  selector: 'app-student-meetings',
  templateUrl: './student-meetings.component.html',
  styleUrls: ['./student-meetings.component.css']
})
export class StudentMeetingsComponent implements OnInit {
  iMeetingId: number;

  protected meetingList: Array<Meeting>;
  id: number;
  meeting: Meeting;
  flag: number;
  sysTableRowList:SysTableRow[];

  constructor(private appProxy: AppProxy ,private sysTableService: SysTableService ) { }


  public lstColumns = [{
    title: 'עריכה',
    name: 'edit',
    bClickCell:true,
    type: 'html'

  },
  {
    title: 'סוג פגישה',
    name: 'nvMeetingType',
   
    
  },
  {
    title: 'תאריך',
    name: 'nvDate',
  },
  {
    title  : 'שעה',
    name: 'nvHour'
  },
  {
    title: 'סיכום',
    name: 'nvSummary',
  }]

  editMeeting(meeting:Meeting){
    
      this.meeting = meeting;
    
      this.flag = 1;
  }

  addMeeting(){
    this.meeting = new Meeting();
    this.meeting.dtMeetingDate = new Date(); 
  }
  close(){
    this.meeting = null;
  }
  ngOnInit() {
    this.appProxy.post("GetMeetingsByStudentId", { iPersonId: 1 }).then(
      data => {
        //alert("good");
        this.meetingList = data;
        this.sysTableService.getValues(SysTableService.dataTables.meetingType.iSysTableId).then(data => {
          this.sysTableRowList =  data;
          this.meetingList.forEach(m => {
            m['nvDate'] = m.dtMeetingDate.toLocaleDateString();
            m['nvHour'] = m.dtMeetingDate.toLocaleTimeString();
            m['edit'] = '<div class="edit"></div>';
            m['nvMeetingType'] = this.sysTableRowList.filter(s=> s.iSysTableRowId == m.iMeetingType)[0].nvValue;
        });
      
          
        });
        debugger;
      }
    );
  }

}

