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
  enteredSearchValue: string = '';
  searchText: string = '';

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
  toClassProfile(id: number){
    const branchid = localStorage.getItem('branchid');
    this.router.navigate(['supervisor-panel/supervisor-branchprofile/'+ branchid +'/classprofile/' + id]);
    const currentRoute = this.router.url;
    localStorage.setItem('previousUrl', currentRoute);
  }
  onSearchTextChanged(){
    this.searchText = this.enteredSearchValue.toLowerCase();
    console.log(this.searchText)
  }
  onBack(){
    const branchid = localStorage.getItem('branchid');
    this.router.navigate(['supervisor-panel/supervisor-branchprofile/'+ branchid +'/teacherlist']);
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