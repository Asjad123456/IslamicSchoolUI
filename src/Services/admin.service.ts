import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Branches } from 'src/Models/branches';
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
public getBranchDetails = (route: string) => {
  return this.http.get<Branches>(this.createCompleteRoute(route, this.envUrl.urlAddress));
}
private createCompleteRoute = (route: string, envAddress: string) => {
  return `${envAddress}${route}`;
}
private generateHeaders = () => {
  return {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
}
}
