import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserWithRoles } from 'src/Models/userwithroles';
import { AdminService } from 'src/Services/admin.service';

@Injectable({
  providedIn: 'root'
})
export class TeacherGuard implements CanActivate {
  user: UserWithRoles[];

  constructor(private router: Router, private service: AdminService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {

    return new Promise((resolve) => {
      // Get the user's roles from local storage
      const loggedInUserId = localStorage.getItem('loggedInUserId');
      this.service.getUserByIdwithroles(loggedInUserId).subscribe((res) =>{
        this.user = res;
        if(this.user[0].roles.includes('TEACHER')){
          resolve(true);
        }else{
          this.router.navigate(['/login']);
          resolve(false);
        }
      });
    });
  }
}
