import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudyClass } from 'src/Models/StudyClass';
import { Teacher } from 'src/Models/teacher';
import { AdminService } from 'src/Services/admin.service';

@Component({
  selector: 'app-admin-teacherprofile',
  templateUrl: './admin-teacherprofile.component.html',
  styleUrls: ['./admin-teacherprofile.component.css']
})
export class AdminTeacherprofileComponent {

  teacher: Teacher[];
  studyclass: StudyClass[]
  enteredSearchValue: string = '';
  searchText: string = '';
  previousUrl: string;

  constructor(private service: AdminService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.previousUrl = `/admin/${params['id']}/admin-teacherslist`;
    });
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
    this.router.navigateByUrl(`/class-profile/1?from=${encodeURIComponent('admin-teacherslist/admin-teacherprofile/94d525e0-3a73-4817-4b38-08db2173ac50')}`);

  }
  onSearchTextChanged(){
    this.searchText = this.enteredSearchValue.toLowerCase();
    console.log(this.searchText)
  }
  onBack(){
    this.router.navigateByUrl(this.previousUrl);
  }
}
