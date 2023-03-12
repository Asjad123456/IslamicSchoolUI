import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudyClass } from 'src/Models/StudyClass';
import { AdminService } from 'src/Services/admin.service';

@Component({
  selector: 'app-supervisor-branch-class-studentlist',
  templateUrl: './supervisor-branch-class-studentlist.component.html',
  styleUrls: ['./supervisor-branch-class-studentlist.component.css']
})
export class SupervisorBranchClassStudentlistComponent {
  studyclass: StudyClass[];
  branchid: string;
  enteredSearchValue: string = '';
  searchText: string = '';
  studentcount: number;


  constructor(private service:AdminService, private route: ActivatedRoute, private router: Router, private location: Location){}

  // classId = +this.route.snapshot.params['id'];
  // branchId = localStorage.getItem('branchID');
  ngOnInit(): void{
    // console.log(this.classId);
    // console.log(this.branchId);
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
    const classid = +this.route.snapshot.params['id'];
    this.router.navigate(['supervisor-panel/supervisor-branchprofile/classprofile/' + classid+ '/student-profile/' + id]);
    localStorage.setItem('classid', classid.toString());
  }
  onBack(){
   const branchid = localStorage.getItem('branchid');
   const classid = this.route.snapshot.params['id'];
   this.router.navigate(['supervisor-panel/supervisor-branchprofile/'+ branchid +'/classprofile/' + classid]);
   
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
}
