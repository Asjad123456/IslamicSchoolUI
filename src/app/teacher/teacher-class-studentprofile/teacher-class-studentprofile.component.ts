import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/Models/students';
import { SupervisorService } from 'src/Services/supervisor.service';

@Component({
  selector: 'app-teacher-class-studentprofile',
  templateUrl: './teacher-class-studentprofile.component.html',
  styleUrls: ['./teacher-class-studentprofile.component.css']
})
export class TeacherClassStudentprofileComponent {
  student: Student[];

  constructor(private route: ActivatedRoute, private service: SupervisorService){}

  ngOnInit(): void{
    console.log(+this.route.snapshot.params['id']);
    this.getStudentDetail();
  }

  getStudentDetail(){
    const studentId = +this.route.snapshot.params['id'];
    this.service.getStudentById(studentId).subscribe((res) =>{
      this.student = res;
      console.log(res);
    })
  }
}
