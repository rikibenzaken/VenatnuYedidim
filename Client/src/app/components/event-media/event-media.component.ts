import { Component, OnInit } from '@angular/core';
import { Document } from '../../classes/document';
import { AppProxy } from '../../services/app.proxy';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-event-media',
  templateUrl: './event-media.component.html',
  styleUrls: ['./event-media.component.css']
})
export class EventMediaComponent implements OnInit {
  id: number;
  document: Document;
  documents: any[] = new Array();

  constructor(private appProxy: AppProxy, private globalService: GlobalService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.parent.params.subscribe(params => {
      this.id = params['iEventId'];
    });

    this.loadDocuments();
  }

  loadDocuments() {
    this.appProxy.post('GetDocumentsByItemId', { iItemId: this.id }).then(data => {
      this.documents = data;
      console.log(this.documents);
    }
      , err => alert(err));
  }

  addDocument() {
    this.document = new Document();
    this.document.iItemId = this.id;
    this.document.iBelongingType = 3;
    this.document.iCategoryType = 0;
  }

  editDocument(id) {
    this.documents.forEach(element => {
      if (element.iDocumentId ==id) {
        this.document = new Document();
        this.document.iBelongingType = 3;
        this.document.iCategoryType = 0;
        this.document.iDocumentId = element.iDocumentId;
        this.document.iItemId = element.iItemId;
        this.document.nvComment = element.nvComment;
        this.document.nvDocumentName = element.nvDocumentName;
        this.document.nvDocumentType=element.nvDocumentType;
      }
    });
  }

  closeDocumentDialog(save) {
    // alert(save);
    if(save===true){
      let len = this.documents.length;
      let i;
      for (i=0; i < len; i++) {
        if (this.documents[i].iDocumentId == this.document.iDocumentId) {
          this.documents.splice(i, 1,this.document);
          break;
        }
      }
      if(i==len)
        this.documents.push(this.document);
    }
    this.document = null;    
    // this.loadDocuments();
  }

  deleteDocument(id) {
    this.appProxy.post('DeleteDocument', { iDocumentId: id, iUserId: this.globalService.getUser()['iUserId'] }).then(data => {
      let len = this.documents.length;
      for (let i = 0; i < len; i++) {
        if (this.documents[i].iDocumentId == id) {
          this.documents.splice(i, 1);
          break;
        }
      }
    }
      , err => alert(err));
  }
}
