import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Attendance } from 'src/Models/Attendance ';
import { TeacherService } from 'src/Services/teacher.service';

@Component({
  selector: 'app-teacher-class-attendancelist',
  templateUrl: './teacher-class-attendancelist.component.html',
  styleUrls: ['./teacher-class-attendancelist.component.css']
})
export class TeacherClassAttendancelistComponent {
  attendanceform: FormGroup;
  attendance: Attendance;
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private service: TeacherService
    ) {}

  ngOnInit(): void {
    this.attendanceform = this.formBuilder.group({
      date: ['', Validators.required]
    });
  }
  getAttendance(){
    const classId = +this.route.snapshot.params['id'];
    this.service.getAttendance(classId, this.attendanceform.get('date').value).subscribe((res) =>{
      this.attendance = res;
      console.log(res);
    },(error) =>{
      console.error(error)
    })
  }
}
 