import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AccountService } from 'src/Services/account.service';
import { AdminService } from 'src/Services/admin.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent {
  admincount: number;
  teachercount: number;
  branchescount: number;
  studentscount: number;

  constructor(private router: Router, private service: AdminService, private route: ActivatedRoute,
     private accountService: AccountService, private snackBar: MatSnackBar){}

    branchId = this.route.snapshot.params['id'];

  ngOnInit(): void {
    this.adminCount();
    this.teachersCount();
    this.branchesCount();
    this.studentCount();
  }
  toRoleManagmnent(){
    this.router.navigate(['role-managment'])
  }
  toBranchesList(){
    const adminId = this.route.snapshot.params['id'];
    localStorage.setItem('adminID', adminId)
    this.router.navigate(['admin-brancheslist']);
  }
  toAdminProfile(){
    const AdminId = this.route.snapshot.params['id'];
    this.router.navigate(['admin-profile/' + AdminId]);
  }
  adminCount(){
    this.service.getSupervisorCount().subscribe((res) =>{
      console.warn(res);
      this.admincount = res;
    })
  }
  teachersCount(){
    this.service.getTeachersCount().subscribe((res) =>{
      console.warn(res);
      this.teachercount = res;
    })
  }
  branchesCount(){
    this.service.getBranchesCount().subscribe((res) =>{
      this.branchescount = res;
    })
  }
  studentCount(){
    this.service.getStudentsCount().subscribe((res) =>{
      this.studentscount = res;
    })
  }
  toRoleManagment(){
    this.router.navigate(['admin/'+ this.branchId +'/role-managment']);
  }
  logout(){
    this.accountService.logout();
    this.snackBar.open('LoggedOut!', 'Close', {
      duration: 3000,
      panelClass: 'success-snackbar'
    });
  }
  toBranches(){
    const navigationExtras: NavigationExtras = {
      state: {
        previousUrl: this.router.url
      }
    };
    this.router.navigate(['admin-brancheslist']);
  }
  toSupervisors(){
    this.router.navigate(['admin-supervisorlist']);
  }
  toTeachers(){
    const adminId = this.route.snapshot.params['id'];
    this.router.navigate(['admin/' + adminId +'/admin-teacherslist']);
  }
  toStudents(){
    this.router.navigate(['admin-studentlist']);
  }
}
