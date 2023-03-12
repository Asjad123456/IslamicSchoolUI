import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudyClass } from 'src/Models/StudyClass';
import { AdminService } from 'src/Services/admin.service';

@Component({
  selector: 'app-admin-teacher-classprofile',
  templateUrl: './admin-teacher-classprofile.component.html',
  styleUrls: ['./admin-teacher-classprofile.component.css']
})
export class AdminTeacherClassprofileComponent {
  class: StudyClass[];
  studentcount: number;

  constructor(private service:AdminService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void{
    this.getClassDetails();
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
    this.router.navigateByUrl(`/admin-branchprofile/class-list/class-profile/${classid}/student-list`);
  }

  getStudentCount(){
    const classid = +this.route.snapshot.params['id'];
    this.service.getStudentsCountForclassprofile(classid).subscribe((res) =>{
      this.studentcount = res;
      console.log('hello', res);
      console.log(classid);
    })
  }
  onback(){
    const lastRoute = localStorage.getItem('lastRoute');
    this.router.navigateByUrl(lastRoute);
    localStorage.removeItem('lastRoute');
  }
}
