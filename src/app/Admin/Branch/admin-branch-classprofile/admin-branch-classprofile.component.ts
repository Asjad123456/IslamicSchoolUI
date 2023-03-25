import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudyClass } from 'src/Models/StudyClass';
import { AdminService } from 'src/Services/admin.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admin-branch-classprofile',
  templateUrl: './admin-branch-classprofile.component.html',
  styleUrls: ['./admin-branch-classprofile.component.css']
})
export class AdminBranchClassprofileComponent {
  class: StudyClass[];
  studentcount: number;

  constructor(private service:AdminService, private route: ActivatedRoute, private fb:FormBuilder, private router: Router,  private location: Location){}

  ngOnInit(): void{
    // this.editClass();
    this.getClassDetails();
    console.log(+this.route.snapshot.params['id']);
    this.getStudentCount();
  }
  getClassDetails = () => {
    const id =+this.route.snapshot.params['id'];
    this.service.getClassById(id).subscribe((res) =>{
      this.class = res;
      console.warn(res);
    })
  }
  // editClass(){
  //   const id =+this.route.snapshot.params['id'];
  //   this.service.getClassById(id).subscribe((res) =>{
  //       this.editClassForm.controls['className'].setValue(res[0]?.className);
  //       this.editClassForm.controls['classTime'].setValue(res[0]?.classTime);
  //     console.warn(res)
  //   })
  // }
  // editClassData(){
  //   const id =+this.route.snapshot.params['id'];
  //   this.service.updateClass(id, this.editClassForm.value).subscribe(() =>{
  //     this.getClassDetails();
  //     this.editClass();
  //     console.warn('done');
  //   })
  // }
  toStudentList(){
    const classid = +this.route.snapshot.params['id'];
    this.router.navigate(['admin-branchprofile/class-list/class-profile/' + classid +'/student-list']);
    const currentRoute = this.router.url;
    localStorage.setItem('previousUrl', currentRoute);
  }
  onBack(){
    const branchId = localStorage.getItem('branchId');
    this.router.navigate(['admin-branchprofile/'+ branchId +'/class-list']);
    localStorage.removeItem('branchId');
  }
  getStudentCount(){
    const classid = +this.route.snapshot.params['id'];
    this.service.getStudentsCountForclassprofile(classid).subscribe((res) =>{
      this.studentcount = res;
      console.log('hello', res);
      console.log(classid);
    })
  }
  toAttendance(){
    const classId = +this.route.snapshot.params['id'];
    this.router.navigate(['admin-branchprofile/teacher-profile/class-profile/'+ classId +'/attendance']);
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
