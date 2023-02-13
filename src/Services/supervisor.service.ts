import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
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
}
