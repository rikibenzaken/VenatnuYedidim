export class Yeshiva{
  public iYeshivaId:number;
  public nvYeshivaName:string;
  public nvAddress:string;
  public nvCity:string;
  public nvContact:string;
  public nvRoleType:string;
  public nvEmail:string;
  public nvMobile:string;
  public iCreatedByUserId:number;
  public dtCreatedate:Date;	
  public iLastModifyUserId:number;
  public dtLastModifyDate:Date;
  public bSysRowStatus:boolean;
  public nvStatus:String;

  constructor(){
    this.iYeshivaId=0;
  }
}