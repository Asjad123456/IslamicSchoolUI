export interface StudyClass{
  id: number;
  className: string;
  classTime: Date;

  //ClassTeacher Details
  appUserId: number;
  userName: string;
  fatherName: string;
  email: string;
  phoneNumber: number;

  //ClassStudentsDetail
  students: Array<{
    id: number;
    regNumber: number;
    name: string;
    fatherName: string;
    contactNumber: number;
    rollNumber: number;
  }>
}
