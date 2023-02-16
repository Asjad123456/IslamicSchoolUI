import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Teacher } from 'src/Models/teacher';
import { TeacherService } from 'src/Services/teacher.service';

@Component({
  selector: 'app-teacher-classlist',
  templateUrl: './teacher-classlist.component.html',
  styleUrls: ['./teacher-classlist.component.css']
})
export class TeacherClasslistComponent {
  teacher: Teacher[];

  constructor(private route: ActivatedRoute, private service: TeacherService, private router: Router){}

  ngOnInit(): void{
    console.warn(this.route.snapshot.params['id']);
    this.getTeacherData();
  }
  getTeacherData(){
    const teacherId = this.route.snapshot.params['id']
    this.service.getTeacherForClassList(teacherId).subscribe((res) =>{
      this.teacher = res;
      console.log(res);
    })
  }
  toClassProfile(){
    const teacherId = this.route.snapshot.params['id']
    this.service.getTeacherForClassList(teacherId).subscribe((res) =>{
      this.teacher = res;
      console.log(res);
      this.router.navigate(['teacher-panel/' + teacherId + '/classlist/classprofile/' + this.teacher[0].studyClasses[0].id]);
    })
  }
}
