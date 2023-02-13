import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
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
}
