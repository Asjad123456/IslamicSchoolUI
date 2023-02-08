export interface Branches {
  id: number;
  branchName: string;
  city: string;
  address: string;
  branchCode: number;
  //BranchAdminDataFields
  branchAdminId: number;
  userName: string;
  fatherName: string;
  email: string;
  phoneNumber: number;
  //BranchClassListDetails
  studyClasses: Array<{
    id: number;
    className: string;
    classTime: Date;
  }>;
}
