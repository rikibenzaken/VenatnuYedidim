import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule, Http } from "@angular/http";
import { RouterModule, Route } from '@angular/router';

//--- services ---
import { AppProxy } from './services/app.proxy';
//--- components ---
import { AppComponent } from './components/app/app.component';
import { AvrechimComponent } from './components/avrechim/avrechim.component';
import { AvrechComponent } from './components/avrech/avrech.component';
import { AvrechDetailsComponent } from './components/avrech-details/avrech-details.component';
import { SettingsComponent } from './components/settings/settings.component';
import { UsersComponent } from './components/users/users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { EventsComponent } from './components/events/events.component';
import { CodeTableComponent } from './code-table/code-table.component';
import { GraduatesComponent } from './graduates/graduates.component';
import { ReportsComponent } from './components/reports/reports.component';
import { InstitutesComponent } from './components/institutes/institutes.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { ImagesComponent } from './components/images/images.component';
<<<<<<< HEAD
import { YeshivotComponent } from './yeshivot/yeshivot.component';
=======
=======
>>>>>>> ef5917cc0b97c28d8fd81baa456dc6a24370edcb
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { EventParticipantsComponent } from './components/event-participants/event-participants.component';
import { EventComponent } from './components/event/event.component';
import { StudentsComponent } from './components/students/students.component';
import { AvrechStudentsComponent } from './components/avrech-students/avrech-students.component';
import { AvrechDiaryComponent } from './components/avrech-diary/avrech-diary.component';
import { AvrechPresenceComponent } from './components/avrech-presence/avrech-presence.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { StudentComponent } from './components/student/student.component';


@NgModule({
  declarations: [
    //components
    AppComponent,
    SettingsComponent,
    UsersComponent,
    UserDetailsComponent,
    EventsComponent,
    AvrechimComponent,
    AvrechComponent,
    AvrechDetailsComponent,
    SettingsComponent,
    UsersComponent,
    UserDetailsComponent,
    EventsComponent,
    StudentsComponent,
    AvrechStudentsComponent,
    AvrechDiaryComponent,
    AvrechPresenceComponent,
    CodeTableComponent,
    GraduatesComponent,
    ReportsComponent,
    InstitutesComponent,
    DocumentsComponent,
    ImagesComponent,
<<<<<<< HEAD
    YeshivotComponent
=======
=======
>>>>>>> ef5917cc0b97c28d8fd81baa456dc6a24370edcb
    EventDetailsComponent,
    EventParticipantsComponent,
    EventComponent,
    StudentsComponent,
    StudentDetailsComponent,
    StudentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "avrechim", component: AvrechimComponent },
      {
        path: "avrechim/avrech/:id", component: AvrechComponent,
        children: [
          { path: "avrech-details/:id", component: AvrechDetailsComponent },
          { path: "avrech-students/:id", component: AvrechStudentsComponent },
          { path: "avrech-diary/:id", component: AvrechDiaryComponent },
          { path: "avrech-presence/:id", component: AvrechPresenceComponent }

        ]
      },
      { path: "events", component: EventsComponent },
      { path: "users", component: UsersComponent },
      { path: "users/user-details", component: UserDetailsComponent },
      { path: "graduates", component: GraduatesComponent },
      {
        path: "settings", component: SettingsComponent,
        children: [
          { path: "reports", component: ReportsComponent },
          { path: "institutes", component: InstitutesComponent },
          { path: "documents", component: DocumentsComponent },
          { path: "images", component: ImagesComponent },
          { path: "code-tables", component: CodeTableComponent },
        ]
      },
      { path: "students", component: StudentsComponent, children: ([{ path: "student-details", component: StudentDetailsComponent }]) }

    ], { useHash: true })
  ],
  providers: [AppProxy],
  bootstrap: [AppComponent]
})
export class AppModule { }
