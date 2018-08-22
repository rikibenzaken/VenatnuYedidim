import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { VyTableColumn } from './vy-table.classes';
import { VyTableOrderByPipe, OrderByPipe } from './vy-table-order-by.pipe';
import { AppProxy } from '../../services/app.proxy';

@Component({
  selector: 'app-vy-table',
  templateUrl: './vy-table.component.html',
  styleUrls: ['./vy-table.component.css']
})
export class VyTableComponent implements OnInit {

  protected iCountRows = 2;
  protected countPagesDisplayed = 5;
  protected iStartNumRow = 0;
  protected iEndNumRow = 0;
  protected lstPagesNum: Array<number> = new Array<number>();

  @Input()
  public lstColumns: Array<VyTableColumn> = new Array<VyTableColumn>();
  @Input()
  public lstDataRows: Array<any> = new Array<any>();
  protected lstCurrentDataRows: Array<any> = new Array<any>();
  @Output()
  public clickCell: EventEmitter<any> = new EventEmitter<any>();

  private lstOrderByFields: Array<any>
  private table: string;
  constructor(private appProxy: AppProxy) {
    this.lstOrderByFields = new Array<any>();
    // this.lstOrderByFields.push({'aa': 'number'})
    // this.lstOrderByFields.push('-bb')
    this.lstPagesNum = new Array<number>();
  }

  clickCellFunc(item) {
    this.clickCell.emit(item);
  }
  createTableFromData() {
    //  let table = "<table><thead><tr><th>מוטי</th></tr></thead><tbody><tr><td>ראובני</td></tr></tbody></table>";
    
  }
createTableForPdf(){
  let table= "<table id='avrechim' style='width: 100%; background-color:#f9e4b1; height: 500px;><thead><tr style='text-align: initial'>";
    this.lstColumns.forEach(column => {
      if (column.bExcel)
        table += "<th>" + column.title + "</th>";
    });
    table += "</tr></thead><tbody>";
    this.lstDataRows.forEach(dataRow => {
      table += "<tr style='text-align: initial'>";
      this.lstColumns.forEach(col => {
        if (col.bExcel)
          table += "<td>" + dataRow[col.name] + "</td>";
      });
      table += "</tr>";
    });
    table+"</tbody></table>"
    // debugger;
    return table;
}
  ngOnInit() {
    // setTimeout(() => {
    //   this.lstDataRows = this.lstDataRows.concat(this.lstDataRows)
    //   this.lstDataRows = this.lstDataRows.concat(this.lstDataRows)
    // }, 1000)
    //  this.downloadFile("aaaaaaaa", "pdf");
  }

  moveToPage(pageNum: number) {
    if (!(pageNum == this.currentPage || pageNum < 0 || (this.iEndNumRow == this.lstDataRows.length && pageNum > this.currentPage))) {
      this.lstCurrentDataRows = this.lstDataRows.slice((pageNum) * this.iCountRows, (pageNum * this.iCountRows) + this.iCountRows);
      this.iStartNumRow = pageNum * this.iCountRows;
      this.iEndNumRow = this.iStartNumRow + this.lstCurrentDataRows.length;
      this.updateLstPagesNum();
    }
  }

  protected currentPage: number = 0;
  updateLstPagesNum() {
    this.currentPage = (this.iStartNumRow / this.iCountRows);
    this.currentPage = this.currentPage < 0 ? 0 : this.currentPage;

    this.lstPagesNum = [this.currentPage];
    for (let i = 1; i < (this.countPagesDisplayed / 2); i++) {
      if ((this.currentPage + i) < (this.lstDataRows.length / this.iCountRows))//next
        this.lstPagesNum.push(this.currentPage + i);
      if ((this.currentPage - i) >= 0)//prev
        this.lstPagesNum.push(this.currentPage - i);
    }
    this.lstPagesNum = new OrderByPipe().transform(this.lstPagesNum);
  }

  public tableToExcel() {
    let uri = 'data:application/vnd.ms-excel;base64,'
      , template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>'
      , base64 = function (s) { return window.btoa(eval('unescape(encodeURIComponent(s))')) }
      , format = function (s, c) {
        return s.replace(/{(\w+)}/g, function (m, p) { return c[p]; })
      }
    var ctx = { worksheet: name || 'Worksheet', table: this.createTableFromData() }
    debugger;
    window.location.href = uri + base64(format(template, ctx))
  }
  
  downloadFile(name: string, type: string,componentName:string) {
    let header="<div><h1>ונתנו ידידים</h1><br/><br/><h2>טבלת "+componentName+"</h2></div>";
    let footer= "<div style='font-weight: bold; background-color: #f7c853 '>סה\"\כ שורות: "+this.lstDataRows.length;
    this.appProxy.post('GeneratPdf', { headerHtml: header, bodyHtml: this.createTableForPdf, footerHtml: footer })
      .then(res => {
        let binaryString = window.atob(res);
        let binaryLen = binaryString.length;
        let bytes = new Uint8Array(binaryLen);
        for (let i = 0; i < binaryLen; i++) {
          let ascii = binaryString.charCodeAt(i);
          bytes[i] = ascii;
        }

        let file = type ? new Blob([bytes], { type: type }) : new Blob([bytes]);
        let link = document.createElement('a');
        link.setAttribute('id', 'linkDownload');
        link.href = window.URL.createObjectURL(file);
        link.download = name + (type ? '.' + type : '');
        link.click();
        try {
          document.getElementById('linkDownload').remove();
        } catch (e) {
          //Global_service.showMessage("הורדת הקובץ נכשלה", "fail");
          console.log(e);
        }
      })
  }
}


