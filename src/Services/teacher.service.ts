import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Student } from 'src/Models/students';
import { StudyClass } from 'src/Models/StudyClass';
import { Teacher } from 'src/Models/teacher';
import { TeacherForEdit } from 'src/Models/teacherforedit';
import { User } from 'src/Models/user';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  baseUrl = environment.ApiUrl;

constructor(private http: HttpClient) { }

getTeacherById(id: string) {
  const url = `${this.baseUrl}User/${id}`;
  return this.http.get<User[]>(url);
}
getTeacherForClassList(id: string) {
  const url = `${this.baseUrl}User/${id}`;
  return this.http.get<Teacher[]>(url);
}
updateProfile(id: string, user: TeacherForEdit) {
  const url = `${this.baseUrl}User/profile/${id}`;
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  return this.http.put<TeacherForEdit>(url, user, httpOptions);
}
getClassById(id: number) {
  const url = `${this.baseUrl}StudyClass/${id}`;
  return this.http.get<StudyClass[]>(url);
}
public addStudent(student: Student): Observable<Student>{
  return this.http.post<Student>(this.baseUrl + 'Student', student);
}
getStudentById(id: number) {
  const url = `${this.baseUrl}Student/${id}`;
  return this.http.get<Student[]>(url);
}
updateStudent(id: number, student: Student) {
  const url = `${this.baseUrl}Student/${id}`;
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  return this.http.put<Student>(url, student, httpOptions);
}
getTeacherClassesCount(id: number){
  const url = `${this.baseUrl}User/teacherclasscount/${id}`;
  return this.http.get<number>(url);
}
}
