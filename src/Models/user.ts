export interface User {
  id: string;
  userName: string;
  token: string;
  roles: string[];

  //Additional User feilds
  email:string;
  fatherName:string;
  phoneNumber: number;
  address:string;

  //Supervisor Branch
  branch: Array<{
    id: number;
    branchName: string;
    branchCode: string;
    address: string;
  }>;

}
