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
    const currentRoute = this.router.url;
    localStorage.setItem('lastRoute', currentRoute);
    this.router.navigate(['admin-branchprofile/teacher-profile/class-profile/' + id]);
}
  onback(){
    const branhcid = localStorage.getItem('brnachid');
    this.router.navigate(['admin-branchprofile/'+ branhcid +'/teachers-list']);
    localStorage.removeItem('brnachid');
  }
  onSearchTextChanged(){
    this.searchText = this.enteredSearchValue.toLowerCase();
    console.log(this.searchText)
  }
  logout(){
    this.router.navigate(['welcome']);
    localStorage.clear();
  }
  ToAdminPanel(){
    const adminId = localStorage.getItem('loggedInUserId');
    this.router.navigate(['admin-panel/' + adminId]);
  }
}
