import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MarkAttendance } from 'src/Models/markAttendance';
import { StudyClass } from 'src/Models/StudyClass';
import { TeacherService } from 'src/Services/teacher.service';
import { format } from 'date-fns';


@Component({
  selector: 'app-teacher-class-markattendance',
  templateUrl: './teacher-class-markattendance.component.html',
  styleUrls: ['./teacher-class-markattendance.component.css']
})
export class TeacherClassMarkattendanceComponent {
  AddAttendanceForm: FormGroup;
  class: StudyClass[];
  attendance: MarkAttendance;
  classId = +this.route.snapshot.params['id'];

  constructor(private service: TeacherService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.getStudents();
    const studyclassId = +this.route.snapshot.params['id'];
    this.AddAttendanceForm = new FormGroup({
      date: new FormControl('', Validators.required),
      isPresent: new FormControl('', Validators.required),
      studentId: new FormControl('', Validators.required),
      studyClassId: new FormControl(studyclassId, Validators.required)
    })
  }
  updateAttendance(isPresent: boolean, studentId: number) {
    this.AddAttendanceForm.controls['isPresent'].setValue(isPresent);
    this.AddAttendanceForm.controls['studentId'].setValue(studentId);
  }
  getStudents(){
    const classId = +this.route.snapshot.params['id'];
    this.service.getClassById(classId).subscribe((res) =>{
      this.class = res;
      console.log(res);
    }, error =>{
      console.log(error);
    })
  }
  markAttendance(){
    const classId = +this.route.snapshot.params['id'];
    this.service.postAttendance(this.AddAttendanceForm.value).subscribe((res) =>{
      console.log(res);
      console.log('hello');
    },error =>{
      console.log(error);
      console.log(this.AddAttendanceForm.value);
    })
  }
}
