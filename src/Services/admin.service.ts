import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Branches } from 'src/Models/branches';
import { Student } from 'src/Models/students';
import { StudyClass } from 'src/Models/StudyClass';
import { User } from 'src/Models/user';
import { EnvironmenturlService } from './environmenturl.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl = environment.ApiUrl

constructor(private http: HttpClient, private envUrl: EnvironmenturlService) { }

getUserWithRoles(){
  return this.http.get<Partial<User[]>>(this.baseUrl + 'Dean/users-with-roles');
}
updateUserRoles(username: string, roles: string[]){
  return this.http.post(this.baseUrl + 'Dean/edit-roles/' + username + '?roles=' + roles, {})
}
public getBranches(): Observable<Branches[]> {
  return this.http.get<Branches[]>(this.baseUrl + 'Branch');
}
public addBracnh(bracnh: Branches): Observable<Branches>{
  return this.http.post<Branches>(this.baseUrl + 'Branch', bracnh);
}
public deleteBranch(id: number): Observable<Branches>{
  return this.http.delete<Branches>(this.baseUrl + 'Branch/' + id);
}
public getBranch(id: number): Observable<Branches>{
  return this.http.get<Branches>(this.baseUrl + 'Branch/' + id);
}
public getUserforbranchSupervisor():Observable<User[]>{
  return this.http.get<User[]>(this.baseUrl + 'User/admins');
}
getBranchById(id: number) {
  const url = `${this.baseUrl}Branch/${id}`;
  return this.http.get<Branches[]>(url);
}
getClassById(id: number) {
  const url = `${this.baseUrl}StudyClass/${id}`;
  return this.http.get<StudyClass[]>(url);
}
getStudentById(id: number) {
  const url = `${this.baseUrl}Student/${id}`;
  return this.http.get<Student[]>(url);
}
getBranchDetailsForEdit(id: number) {
  const url = `${this.baseUrl}Branch/${id}`;
  return this.http.get<Branches>(url);
}
getBranchdetailsforclasslist(id: number) {
  const url = `${this.baseUrl}Branch/${id}`;
  return this.http.get<Branches[]>(url);
}
updateBranch(id: number, branch: Branches) {
  const url = `${this.baseUrl}Branch/${id}`;
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  return this.http.put<Branches>(url, branch, httpOptions);
}
updateClass(id: number, studyclass: StudyClass) {
  const url = `${this.baseUrl}StudyClass/${id}`;
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  return this.http.put<StudyClass>(url, studyclass, httpOptions);
}
private httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
// private createCompleteRoute = (route: string, envAddress: string) => {
//   return `${envAddress}${route}`;
// }
// private generateHeaders = () => {
//   return {
//     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
//   }
// }
}
