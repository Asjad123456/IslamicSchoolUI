import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudyClass } from 'src/Models/StudyClass';
import { AdminService } from 'src/Services/admin.service';

@Component({
  selector: 'app-admin-branch-class-studentlist',
  templateUrl: './admin-branch-class-studentlist.component.html',
  styleUrls: ['./admin-branch-class-studentlist.component.css']
})
export class AdminBranchClassStudentlistComponent {
  studyclass: StudyClass[];
  branchid: string;
  enteredSearchValue: string = '';
  searchText: string = '';
  studentcount: number;


  constructor(private service:AdminService, private route: ActivatedRoute, private router: Router, private location: Location){}

  classId = +this.route.snapshot.params['id'];
  branchId = localStorage.getItem('branchID');
  ngOnInit(): void{
    console.log(this.classId);
    console.log(this.branchId);
    this.getClassDetails();
    this.getStudentCount();
  }
  getClassDetails(){
    const id = +this.route.snapshot.params['id'];
    this.service.getClassById(id).subscribe((res) =>{
      this.studyclass = res;
      console.warn('hello', res);
    })
  }
  toStudentProfile(id:number){
    this.service.getClassById(id).subscribe(
      response =>{
        this.router.navigate(['admin-branchprofile/class-list/clasprofile/student-profile/' + id]);
      }
    );
  }
  onBack(){
    const previousUrl = localStorage.getItem('previousUrl');
    this.router.navigateByUrl(previousUrl);
    localStorage.removeItem('previousUrl');

  }
  onSearchTextChanged(){
    this.searchText = this.enteredSearchValue.toLowerCase();
    console.log(this.searchText)
  }
  getStudentCount(){
    const classid = +this.route.snapshot.params['id'];
    this.service.getStudentsCountForclassprofile(classid).subscribe((res) =>{
      this.studentcount = res;
      console.log('hello', res);
      console.log(classid);
    })
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
