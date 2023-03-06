import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddStudyClass } from 'src/Models/addStudyClass';
import { Branches } from 'src/Models/branches';
import { Student } from 'src/Models/students';
import { StudyClass } from 'src/Models/StudyClass';
import { SupervisorForEdit } from 'src/Models/supervisorForUpdate';
import { User } from 'src/Models/user';

@Injectable({
  providedIn: 'root'
})
export class SupervisorService {
  baseUrl = environment.ApiUrl;

constructor(private http: HttpClient) { }

getSupervisorById(id: string) {
  const url = `${this.baseUrl}User/${id}`;
  return this.http.get<User[]>(url);
}
updateProfile(id: string, user: SupervisorForEdit) {
  const url = `${this.baseUrl}User/profile/${id}`;
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  return this.http.put<SupervisorForEdit>(url, user, httpOptions);
}
getBranchById(id: number) {
  const url = `${this.baseUrl}Branch/${id}`;
  return this.http.get<Branches[]>(url);
}
public getTeachersforlist(): Observable<User[]>{
  return this.http.get<User[]>(this.baseUrl + 'User/teachers');
}
public addClass(studyclass: AddStudyClass): Observable<AddStudyClass>{
  return this.http.post<AddStudyClass>(this.baseUrl + 'StudyClass', studyclass);
}
getClassById(id: number) {
  const url = `${this.baseUrl}StudyClass/${id}`;
  return this.http.get<StudyClass[]>(url);
}
getStudentById(id: number) {
  const url = `${this.baseUrl}Student/${id}`;
  return this.http.get<Student[]>(url);
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
gwtStudyClassCountForBranch(id: number){
  const url = `${this.baseUrl}Branch/studyclasscount/${id}`;
  return this.http.get<number>(url);
}
getTeacherCountforBranch(id: number){
  const url = `${this.baseUrl}Branch/teachercount/${id}`;
  return this.http.get<number>(url);
}
getStudentsCountforBranch(id: number){
  const url = `${this.baseUrl}Branch/students/${id}`;
  return this.http.get<number>(url);
}
getStudentsCountForclassprofile(id: number){
  const url = `${this.baseUrl}StudyClass/studentcount/${id}`;
  return this.http.get<number>(url);
}
getStudentList(id: number){
  const url = `${this.baseUrl}Branch/studentslist/${id}`;
  return this.http.get<Branches[]>(url);
}
}
