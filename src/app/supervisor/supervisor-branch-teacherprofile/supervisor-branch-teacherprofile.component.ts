import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Teacher } from 'src/Models/teacher';
import { AdminService } from 'src/Services/admin.service';

@Component({
  selector: 'app-supervisor-branch-teacherprofile',
  templateUrl: './supervisor-branch-teacherprofile.component.html',
  styleUrls: ['./supervisor-branch-teacherprofile.component.css']
})
export class SupervisorBranchTeacherprofileComponent {
  teacher: Teacher[];

  constructor(private service: AdminService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.getTeacherDetail();
  }
  getTeacherDetail(){
    const teacherId = this.route.snapshot.params['id'];
    this.service.getTeacherById(teacherId).subscribe((res) =>{
      this.teacher = res;
      console.log(res);
    })
  }
  toClassProfile(){
    const teacherId = this.route.snapshot.params['id'];
    this.service.getTeacherById(teacherId).subscribe((res) =>{
      this.teacher = res;
      console.log(res);
      this.router.navigate(['admin-branchprofile/teacher-profile/' + teacherId + '/class-profile/' + this.teacher[0].studyClasses[0].id])
    })
  }
}
