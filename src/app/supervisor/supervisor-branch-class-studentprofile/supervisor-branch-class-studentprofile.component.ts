import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Student } from 'src/Models/students';
import { SupervisorService } from 'src/Services/supervisor.service';

@Component({
  selector: 'app-supervisor-branch-class-studentprofile',
  templateUrl: './supervisor-branch-class-studentprofile.component.html',
  styleUrls: ['./supervisor-branch-class-studentprofile.component.css']
})
export class SupervisorBranchClassStudentprofileComponent {
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
