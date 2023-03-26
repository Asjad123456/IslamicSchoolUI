import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StudyClass } from 'src/Models/StudyClass';
import { TeacherService } from 'src/Services/teacher.service';
import { Student } from 'src/Models/students';
import { StudentAttendance } from 'src/Models/StudentAttendance ';


@Component({
  selector: 'app-teacher-class-markattendance',
  templateUrl: './teacher-class-markattendance.component.html',
  styleUrls: ['./teacher-class-markattendance.component.css']
})
export class TeacherClassMarkattendanceComponent {
  class: StudyClass;
  getclass: StudyClass[];
  students: Student[];
  attendanceForm: FormGroup;
  attendanceRecords: StudentAttendance[] = [];
  classId = +this.route.snapshot.params['id'];
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private service: TeacherService
  ) { }

  ngOnInit(): void {
    this.getStudents();
    this.attendanceForm = this.fb.group({
      date: ['', Validators.required],
      classid: [this.classId  ,Validators.required],
      studentId: ['', Validators.required],
      isPresent: ['', Validators.required],

    });
  }
  getStudents(){
    this.service.getClassById(this.classId).subscribe((res) =>{
      this.getclass = res;
    })
  }
  onSubmit(): void {
    this.attendanceRecords = []; // clear the array
  
    if (this.attendanceForm.invalid) {
      return;
    }
  
    this.attendanceRecords = this.getclass[0].students.map((student) => {
      const isPresent = this.attendanceForm.get('isPresent').value;
      const studentId = student.id;
      return { studentId: studentId, isPresent: isPresent };
    });
  
    console.log(JSON.stringify(this.attendanceRecords));
  
    this.service.addAttendance(this.classId, this.attendanceForm.get('date').value, this.attendanceRecords).subscribe(() => {
      console.log('Attendance added successfully.');
      console.log(this.attendanceRecords);
    }, error => {
      console.log(error);
    });
  }
  
}
