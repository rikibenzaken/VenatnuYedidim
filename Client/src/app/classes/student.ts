import { Person } from "./person";

export class Student implements Person {


    public iPersonId: number;
    public nvFirstName: string;
    public nvLastName: string;
    public nvIdentityCard: string;
    public nvPhone: string;
    public nvMobile: string;
    public nvEmail: string;
    public nvAddress: string;
    public nvCity: string;
    public nvStatus: string;
    public nvBirthdate: string;
    public dtBirthdate: Date;

    public iStudentId: number;
    public nvFatherDeathDate: string;
    public bDeathFather: boolean;
    public nvMotherDeathDate: string;
    public bDeathMother: Boolean;
    public iCauseOfDeathFather:number;
    public iCauseOfDeathMother:number;
    public nvImgStudent: string
    public nvYeshivaName: string
    public nvYeshivaStreet: string
    public nvYeshivaCity: string
    public dtAddStudentDate: Date;
    public nvComment: string;

    constructor() {
        this.dtBirthdate = new Date();
        this.dtAddStudentDate= new Date();
    }

}

//AIzaSyDmcJWztCYo2xInukOD2bnFp-lPK-IFuCA 