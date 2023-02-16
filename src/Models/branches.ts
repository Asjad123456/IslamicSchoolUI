export interface Branches {
  id: number;
  branchName: string;
  city: string;
  address: string;
  branchCode: number;
  //BranchAdminDataFields
  appUsers: Array<{
    id: number;
    userName: string;
    fatherName: string;
    email: string;
    phoneNumber: number;
  }>
  //BranchClassListDetails
  studyClasses: Array<{
    id: number;
    className: string;
    classTime: Date;
  }>
  students: Array<{
    id: number;
    regNumber: number;
    name: string;
    fatherName: string;
    contactNumber: number;
    rollNumber: number;
    address: string;
  }>
}
