import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudyClass } from 'src/Models/StudyClass';
import { SupervisorService } from 'src/Services/supervisor.service';

@Component({
  selector: 'app-supervisor-branch-classprofile',
  templateUrl: './supervisor-branch-classprofile.component.html',
  styleUrls: ['./supervisor-branch-classprofile.component.css']
})
export class SupervisorBranchClassprofileComponent {
  studyclass: StudyClass[];
  classtostudent: StudyClass;
  editClassForm: FormGroup;
  studentcount: number;

  constructor(private route: ActivatedRoute, private router: Router, private service: SupervisorService, private fb:FormBuilder){}

  ngOnInit(): void{
    this.editClassForm= this.fb.group({
      className: [''],
      classTime: ['']
  })
    console.log(+this.route.snapshot.params['id']);
    this.getClassDetail();
    this.editClass();
    this.getStudentCount();
  }
  getClassDetail(){
    const classId = +this.route.snapshot.params['id'];
    this.service.getClassById(classId).subscribe((res) =>{
      this.studyclass = res;
      console.log(res);
    })
  }
  toStudentProfile(){
    const classId = +this.route.snapshot.params['id'];
    this.service.getClassById(classId).subscribe((res) =>{
      this.classtostudent = res[0];
      console.log(res);
      this.router.navigate(['supervisor-panel/supervisor-branchprofile/classprofile/' + classId + '/student-profile/' + this.classtostudent.students[0].id])
    })
  }
  editClass(){
    const id =+this.route.snapshot.params['id'];
    this.service.getClassById(id).subscribe((res) =>{
        this.editClassForm.controls['className'].setValue(res[0]?.className);
        this.editClassForm.controls['classTime'].setValue(res[0]?.classTime);
      console.warn(res)
    })
  }
  editClassData(){
    const id =+this.route.snapshot.params['id'];
    this.service.updateClass(id, this.editClassForm.value).subscribe(() =>{
      this.getClassDetail();
      this.editClass();
      console.warn('done');
    },error =>{
      console.log(error);
    })
  }
  getStudentCount(){
    const classid = +this.route.snapshot.params['id'];
    this.service.getStudentsCountForclassprofile(classid).subscribe((res) =>{
      this.studentcount = res;
      console.log('hello', res);
      console.log(classid);
    })
  }
  ToStudentList(){
    const classId = +this.route.snapshot.params['id'];
    this.router.navigate(['supervisor-panel/supervisor-branchprofile/classprofile/'+ classId +'/studentlist']);
  }
}
