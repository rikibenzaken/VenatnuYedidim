import { Component, OnInit, Input, Output, ViewChild } from '@angular/core';
import { User } from '../../classes/user';
import { Person } from '../../classes/person';
import { AppProxy } from '../../services/app.proxy';
import { ActivatedRoute, Router } from '@angular/router';
import { SysTableService } from '../../services/sys-table.service';
import { GlobalService } from '../../services/global.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private appProxy: AppProxy, private globalService: GlobalService, private router: Router, private route: ActivatedRoute, private sysTableService: SysTableService) { }

  ngOnInit() {
    this.route.parent.params.subscribe(params => {
      if (params['iPersonId'] != '0') {
        this.appProxy.post("GetUser", { iPersonId: params['iPersonId'] })
          .then(data => {
            this.user = data;
          });
      }
      else {
        this.user = new User();
      }
    });
    this.sysTableService.getValues(4).then(data => {
      this.lst = data;
    });
    if (this.globalService.getUser().iPermissionId == 5)
      this.isManeger = true;
    else this.isManeger = false;
  }
  @Input()
  @Output()
  public user: User;

  @Input()
  @Output()
  public person: Person;

  @Output()
  isManeger: boolean = false;
  notFocused: boolean = true;

  
  @ViewChild(NgForm) form;

  checkFormValidity() {
    return this.form.valid;
  }

  public lst: Array<any>;

  saveUser() {
    this.appProxy.post("SetUser", { user: this.user, iUserId: 1 }).then(data => {
      if (data == true) {
        alert("המשתמש נוסף בהצלחה!");
        this.router.navigate(['users']);
      }

      else
        alert("error!");
    })
  }

}
