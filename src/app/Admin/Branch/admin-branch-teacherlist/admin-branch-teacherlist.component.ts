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
  teachercount: number;
  enteredSearchValue: string = '';
  searchText: string = '';

  constructor(private service: AdminService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.getbranchData();
    this.teachersCount();
  }
  getbranchData(){
    const branchId = +this.route.snapshot.params['id'];
    this.service.getBranchWithOnlyTeachers(branchId).subscribe((res) =>{
      this.branch = res;
      console.log(res);
    })
  }
  toTeacherProfile(id: string){
    const branchId = +this.route.snapshot.params['id'];
    this.service.getBranchWithOnlyTeachers(branchId).subscribe((res) =>{
      this.branch = res;
      console.log(res);
      this.router.navigate(['admin-branchprofile/' + branchId + '/teacher-profile/' + id])
    })
    const branchid = JSON.stringify(+this.route.snapshot.params['id']);
    localStorage.setItem('brnachid', branchid);
  }
  onBack(){
    const branchid = +this.route.snapshot.params['id'];
    this.router.navigate(['admin-branchprofile/' + branchid]);
  }
  teachersCount(){
    this.service.getTeachersCount().subscribe((res) =>{
      console.warn(res);
      this.teachercount = res;
    })
  }
  onSearchTextChanged(){
    this.searchText = this.enteredSearchValue.toLowerCase();
    console.log(this.searchText)
  }
}
