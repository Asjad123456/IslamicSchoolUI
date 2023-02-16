import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
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
}
