import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Branches } from 'src/Models/branches';
import { AdminService } from 'src/Services/admin.service';

@Component({
  selector: 'app-admin-branch-teacherlist',
  templateUrl: './admin-branch-teacherlist.component.html',
  styleUrls: ['./admin-branch-teacherlist.component.css']
})
export class AdminBranchTeacherlistComponent {
  branch: Branches[];

  constructor(private service: AdminService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.getbranchData()
  }
  getbranchData(){
    const branchId = +this.route.snapshot.params['id'];
    this.service.getBranchWithOnlyTeachers(branchId).subscribe((res) =>{
      this.branch = res;
      console.log(res);
    })
  }
  toTeacherProfile(){
    const branchId = +this.route.snapshot.params['id'];
    this.service.getBranchWithOnlyTeachers(branchId).subscribe((res) =>{
      this.branch = res;
      console.log(res);
      this.router.navigate(['admin-branchprofile/' + branchId + '/teacher-profile/' + this.branch[0].appUsers[0].id])
    })
  }
}
