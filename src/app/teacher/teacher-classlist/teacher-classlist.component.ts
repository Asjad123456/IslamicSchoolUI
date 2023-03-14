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
  studyClassCount: number;
  enteredSearchValue: string = '';
  searchText: string = '';

  constructor(private route: ActivatedRoute, private service: TeacherService, private router: Router){}

  ngOnInit(): void{
    console.warn(this.route.snapshot.params['id']);
    this.getTeacherData();
    this.getTeacherClassCount();
  }
  getTeacherData(){
    const teacherId = this.route.snapshot.params['id']
    this.service.getTeacherForClassList(teacherId).subscribe((res) =>{
      this.teacher = res;
      console.log(res);
    })
  }
  toClassProfile(id: number){
    const teacherId = this.route.snapshot.params['id']
    this.service.getTeacherForClassList(teacherId).subscribe((res) =>{
      this.teacher = res;
      console.log(res);
      this.router.navigate(['teacher-panel/' + teacherId + '/classlist/classprofile/' + id]);
      localStorage.setItem('teacherid', teacherId);
    })
  }
  onSearchTextChanged(){
    this.searchText = this.enteredSearchValue.toLowerCase();
    console.log(this.searchText)
  }
  getTeacherClassCount(){
    const teacherID = this.route.snapshot.params['id'];
    this.service.getTeacherClassesCount(teacherID).subscribe((res) =>{
      this.studyClassCount = res;
    })
  }
  onBack(){
    const teacherId = this.route.snapshot.params['id'];
    this.router.navigate(['teacher-panel/' + teacherId]);
  }
}
