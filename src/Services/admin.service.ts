import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AdminForEdit } from 'src/Models/AdminForEdit';
import { Branches } from 'src/Models/branches';
import { Student } from 'src/Models/students';
import { StudyClass } from 'src/Models/StudyClass';
import { Teacher } from 'src/Models/teacher';
import { User } from 'src/Models/user';
import { UserWithRoles } from 'src/Models/userwithroles';
import { EnvironmenturlService } from './environmenturl.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl = 'https://localhost:7174/api/';

constructor(private http: HttpClient, private envUrl: EnvironmenturlService) { }

getUserByIdwithroles(id: string): Observable<UserWithRoles[]>{
  return this.http.get<UserWithRoles[]>(this.baseUrl + 'User/roles/' + id);
}
getUserWithRoles(){
  return this.http.get<Partial<User[]>>(this.baseUrl + 'Dean/users-with-roles');
}
updateUserRoles(username: string, roles: string[]){
  return this.http.post(this.baseUrl + 'Dean/edit-roles/' + username + '?roles=' + roles, {})
}
public getBranches(): Observable<Branches[]> {
  return this.http.get<Branches[]>(this.baseUrl + 'Branch');
}
public getClasses(): Observable<StudyClass[]> {
  return this.http.get<StudyClass[]>(this.baseUrl + 'StudyClass');
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
public getSupervisorsforlist():Observable<User[]>{
  return this.http.get<User[]>(this.baseUrl + 'User/supervisors');
}
public getTeachersforlist():Observable<User[]>{
  return this.http.get<User[]>(this.baseUrl + 'User/teachers');
}
getBranchById(id: number) {
  const url = `${this.baseUrl}Branch/${id}`;
  return this.http.get<Branches[]>(url);
}
getBranchWithOnlyTeachers(id: number){
  const url = `${this.baseUrl}Branch/teachers/${id}`;
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
getSupervisorById(id: string) {
  const url = `${this.baseUrl}User/${id}`;
  return this.http.get<User[]>(url);
}
getTeacherById(id: string) {
  const url = `${this.baseUrl}User/${id}`;
  return this.http.get<Teacher[]>(url);
}
getBranchForSupervisor(id: string) {
  const url = `${this.baseUrl}User/${id}`;
  return this.http.get<User>(url);
}
getBranchDetailsForEdit(id: number) {
  const url = `${this.baseUrl}Branch/${id}`;
  return this.http.get<Branches>(url);
}
getBranchdetailsforclasslist(id: number) {
  const url = `${this.baseUrl}Branch/${id}`;
  return this.http.get<Branches[]>(url);
}
AddBranchForSupervisor(id: string, user: User) {
  const url = `${this.baseUrl}User/${id}`;
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  return this.http.put<Branches>(url, user, httpOptions);
}
updateBranch(id: number, branchDto: any, adminUserId: string | null): Observable<any> {
  let url = `${this.baseUrl}Branch/${id}`;
  if (adminUserId) {
    url += `?adminUserId=${adminUserId}`;
  }
  return this.http.put(url, branchDto);
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
public getSupervisors():Observable<User[]>{
  return this.http.get<User[]>(this.baseUrl + 'User/supervisors');
}
public getStudents(): Observable<Student[]>{
  return this.http.get<Student[]>(this.baseUrl + 'Student')
}
getAdminById(id: string) {
  const url = `${this.baseUrl}User/admin/${id}`;
  return this.http.get<User[]>(url);
}
getSupervisorCount(){
  const url = `${this.baseUrl}User/admins-count`;
  return this.http.get<number>(url);
}
getTeachersCount(){
  const url = `${this.baseUrl}User/teachers-count`;
  return this.http.get<number>(url);
}
getBranchesCount(){
  const url = `${this.baseUrl}Branch/count`;
  return this.http.get<number>(url);
}
getStudentsCount(){
  const url = `${this.baseUrl}Student/count`;
  return this.http.get<number>(url);
}
public getTeachers():Observable<User[]>{
  return this.http.get<User[]>(this.baseUrl + 'User/allteachers');
}
updateProfile(id: string, user: AdminForEdit) {
  const url = `${this.baseUrl}User/profile/${id}`;
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  return this.http.put<AdminForEdit>(url, user, httpOptions);
}
gwtStudyClassCountForBranch(id: number){
  const url = `${this.baseUrl}Branch/studyclasscount/${id}`;
  return this.http.get<number>(url);
}
getTeacherCountorBranch(id: number){
  const url = `${this.baseUrl}Branch/teachercount/${id}`;
  return this.http.get<number>(url);
}
public deleteStudyClass(id: number): Observable<StudyClass>{
  return this.http.delete<StudyClass>(this.baseUrl + 'StudyClass/' + id);
}
getStudentsCountForclassprofile(id: number){
  const url = `${this.baseUrl}StudyClass/studentcount/${id}`;
  return this.http.get<number>(url);
}
public deleteUser(id: string): Observable<User>{
  return this.http.delete<User>(this.baseUrl + 'User/' + id);
}
}
