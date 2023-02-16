import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Branches } from 'src/Models/branches';
import { AdminService } from 'src/Services/admin.service';

@Component({
  selector: 'app-supervisor-branch-teacherslist',
  templateUrl: './supervisor-branch-teacherslist.component.html',
  styleUrls: ['./supervisor-branch-teacherslist.component.css']
})
export class SupervisorBranchTeacherslistComponent {
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
      this.router.navigate(['supervisor-panel/supervisor-branchprofile' + branchId + '/teacher-profile/' + this.branch[0].appUsers[0].id])
    })
  }
}
