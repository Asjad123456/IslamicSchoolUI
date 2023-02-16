import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudyClass } from 'src/Models/StudyClass';
import { SupervisorService } from 'src/Services/supervisor.service';

@Component({
  selector: 'app-teacher-classprofile',
  templateUrl: './teacher-classprofile.component.html',
  styleUrls: ['./teacher-classprofile.component.css']
})
export class TeacherClassprofileComponent {
  studyclass: StudyClass[];
  classtostudent: StudyClass;

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
      this.router.navigate(['teacher-panel/classlist/classprofile/' + classId + '/studentprofile/' + this.classtostudent.students[0].id])
    })
  }
}
