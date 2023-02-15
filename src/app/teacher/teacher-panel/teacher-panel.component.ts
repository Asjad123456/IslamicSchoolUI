import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/Models/user';
import { TeacherService } from 'src/Services/teacher.service';

@Component({
  selector: 'app-teacher-panel',
  templateUrl: './teacher-panel.component.html',
  styleUrls: ['./teacher-panel.component.css']
})
export class TeacherPanelComponent {
  teacher: User[];

  constructor(private route: ActivatedRoute, private service: TeacherService){}

  ngOnInit(): void{
    console.warn(this.route.snapshot.params['id']);
    this.getTeacherData()
  }
  getTeacherData(){
    const teacherId = this.route.snapshot.params['id']
    this.service.getTeacherById(teacherId).subscribe((res) =>{
      this.teacher = res;
      console.log(res);
    })
  }
}
