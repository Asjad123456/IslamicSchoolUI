import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/Models/user';
import { AdminService } from 'src/Services/admin.service';

@Component({
  selector: 'app-admin-teacherslist',
  templateUrl: './admin-teacherslist.component.html',
  styleUrls: ['./admin-teacherslist.component.css']
})
export class AdminTeacherslistComponent {
  user: User[];

  constructor(private service: AdminService, private router: Router){}

  ngOnInit(): void {
    this.TeachersList();

  }
  TeachersList(){
    this.service.getTeachers().subscribe((res) =>{
      this.user = res;
      console.warn(res);
    })
  }
  toTeacherProfile(id: string){
    this.service.getTeachers().subscribe((res) =>{
      this.user = res;
      this.router.navigate(['admin-teacherslist/admin-teacherprofile/' + id])
    })
  }
}
