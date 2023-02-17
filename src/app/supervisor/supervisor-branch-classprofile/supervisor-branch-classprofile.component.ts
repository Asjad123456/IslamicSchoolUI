import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
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

  constructor(private route: ActivatedRoute, private router: Router, private service: SupervisorService){}

  ngOnInit(): void{
    console.log(+this.route.snapshot.params['id']);
    this.getClassDetail();
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
  editClass(){}
}
