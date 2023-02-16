import { Time } from "@angular/common";

export interface Teacher {
  userName: string;
  email:string;
  fatherName:string;
  phoneNumber: string;
  studyClasses: Array<{
    id: number;
    className: string;
    classTime: Time;
  }>
}
