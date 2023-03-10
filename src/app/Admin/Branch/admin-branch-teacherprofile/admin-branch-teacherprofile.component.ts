import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Teacher } from 'src/Models/teacher';
import { AdminService } from 'src/Services/admin.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admin-branch-teacherprofile',
  templateUrl: './admin-branch-teacherprofile.component.html',
  styleUrls: ['./admin-branch-teacherprofile.component.css']
})
export class AdminBranchTeacherprofileComponent {
  teacher: Teacher[];
  enteredSearchValue: string = '';
  searchText: string = '';

  constructor(private service: AdminService, private route: ActivatedRoute, private router: Router, private location: Location){}

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
  toClassProfile(id: number){
    this.router.navigateByUrl(`/class-profile/${id}?from=${encodeURIComponent('admin-branchprofile/5/teacher-profile/94d525e0-3a73-4817-4b38-08db2173ac50')}`);
}
  onback(){
    this.location.back();
  }
  onSearchTextChanged(){
    this.searchText = this.enteredSearchValue.toLowerCase();
    console.log(this.searchText)
  }
}
