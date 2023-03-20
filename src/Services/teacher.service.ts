import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Attendance } from 'src/Models/Attendance';
import { AttendanceResponse } from 'src/Models/AttendanceResponse';
import { GuardianForUpdate } from 'src/Models/guardianForUpdate';
import { MarkAttendance } from 'src/Models/markAttendance';
import { StudentForUpdate } from 'src/Models/studentForUpdate';
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
updateStudent(id: number, student: StudentForUpdate) {
  const url = `${this.baseUrl}Student/${id}`;
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  return this.http.put<Student>(url, student, httpOptions);
}
updateGuardian(id: number, student: GuardianForUpdate) {
  const url = `${this.baseUrl}Guardian/${id}`;
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
getStudentsCountForclassprofile(id: number){
  const url = `${this.baseUrl}StudyClass/studentcount/${id}`;
  return this.http.get<number>(url);
}
public deleteStudent(id: number): Observable<Student>{
  return this.http.delete<Student>(this.baseUrl + 'Student/' + id);
}
getAttendanceForClassAndDate(classId: number, date: Date): Observable<Attendance[]> {
  const formattedDate = this.formatDate(date);
  return this.http.get<Attendance[]>(`${this.baseUrl}studyclasses/${classId}/attendance?date=${formattedDate}`);
}

getAttendance(classId: number, date: Date): Observable<AttendanceResponse[]> {
  const formattedDate = date.toLocaleDateString('en-GB').replace(/\//g, '-'); // Format date as dd-mm-yyyy
  const url = `${this.baseUrl}attendance/attendance?date=${formattedDate}`;
  return this.http.get<AttendanceResponse[]>(url);
}
getAllAttendance(classId: number) {
  return this.http.get<any[]>(this.baseUrl + 'attendance?classId=' + classId);
}
public formatDate(date: Date): string {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    return null;
  }

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
}
// postAttendance(classId: number, date: Date, attendanceList: MarkAttendance[]): Observable<any> {
//   const url = `${this.baseUrl}class/${classId}/attendance/attendance`;
//   return this.http.post<any>(url, { classId, date, attendanceList });
// }
postAttendance(attendance: MarkAttendance[]):Observable<MarkAttendance[]>{
  const url = `${this.baseUrl}attendance/attendance`;
  return this.http.post<MarkAttendance[]>(url, attendance);
}
addAttendance(classId: number, attendance: MarkAttendance): Observable<void> {
  const url = `${this.baseUrl}/class/${classId}/attendance/attendance`;
  return this.http.post<void>(url, attendance);
}
}