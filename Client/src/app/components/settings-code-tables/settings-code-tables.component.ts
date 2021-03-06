import { Component, OnInit, ViewChild } from '@angular/core';
import { SysTableService } from '../../services/sys-table.service';
import { error } from 'util';
import { SysTableRow } from '../../classes/SysTableRow';
import { SysTables } from '../../classes/SysTables';
import { AppProxy } from '../../services/app.proxy';
import { forEach } from '@angular/router/src/utils/collection';
import { t } from '@angular/core/src/render3';

@Component({
  selector: 'app-settings-code-tables',
  templateUrl: './settings-code-tables.component.html',
  styleUrls: ['./settings-code-tables.component.css']
})
export class SettingsCodeTableComponent implements OnInit {

  protected tableNames: Array<SysTables>;
  protected Values: Array<SysTableRow>;

  protected idSysTableRow: number;
  protected divNewValue: boolean;
  protected toEdit: boolean;
  protected row: SysTableRow;
  protected roeToadd: SysTableRow = new SysTableRow();
  protected roeToadd1: SysTableRow = new SysTableRow();
  protected Mykey: string;
  protected showOverlap: boolean;
  protected lstColumns = [{
    title: 'עריכה',
    type: 'html',
    bClickCell: true
  },
  {
    title: 'ערך',
    name: 'nvValue'
  }]
  private readonly newProperty = this;
  @ViewChild('CodeTables') CodeTables:any;

  constructor(private sysTableService: SysTableService, private appProxy: AppProxy) { }

  ngOnInit() {

    this.sysTableService.getTableNames().then(data => 
    
      this.tableNames = data,
    error => alert(error));

  }
  public getValues() {

    this.sysTableService.getValues(this.idSysTableRow).then(data => {

      if (data) {
        this.Values = data as Array<SysTableRow>;
      }

      else alert(error)
    });
    console.log(this.Values);
  }
  public editSysTableRow(myRow: SysTableRow) {
    this.showOverlap = true;
    this.row = myRow;
    this.toEdit = true;
  }
  saveEditValue() {

    this.toEdit = false;
    this.showOverlap = false;
    this.sysTableService.editValue(this.row);
    Object.keys(SysTableService.dataTables).forEach(key => {
      if (SysTableService.dataTables[key].iSysTableId == this.idSysTableRow) {
        this.Mykey = key;
      }
    }
    )
    return this.appProxy.post("GetValues", { iSysTableId: this.idSysTableRow })

      .then(l => {
        if (l) {
          SysTableService.dataTables[this.Mykey].SysTableRow = l

        }
        else
          console.log("err");
      }

      );

  }
  saveNeeValue() {
    
    this.roeToadd.dtLastModifyDate = new Date();
    this.roeToadd.dtCreateDate = new Date();
    this.roeToadd.iSysTableId = this.idSysTableRow;
    Object.keys(SysTableService.dataTables).forEach(key => {
      if (SysTableService.dataTables[key].iSysTableId == this.idSysTableRow) {
        this.Mykey = key;

      }
    })

    this.divNewValue = false
    this.showOverlap = false
   
    return this.sysTableService.addValue(this.roeToadd)
      .then(res => {
        SysTableService.dataTables[this.Mykey].SysTableRow.push(Object.assign({}, this.roeToadd));
        this.roeToadd = new SysTableRow();

      });
      

  }
  addNewValue() {
    this.divNewValue = true
    this.showOverlap = true
  }
  close() {
    this.divNewValue = false
    this.showOverlap = false
  }
  downloadExcel(){
    this.CodeTables.downloadExcel();
  }
}
