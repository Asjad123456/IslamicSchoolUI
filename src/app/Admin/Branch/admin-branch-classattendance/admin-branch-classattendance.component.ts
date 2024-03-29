import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AttendanceResponse } from 'src/Models/AttendanceResponse';
import { TeacherService } from 'src/Services/teacher.service';

@Component({
  selector: 'app-admin-branch-classattendance',
  templateUrl: './admin-branch-classattendance.component.html',
  styleUrls: ['./admin-branch-classattendance.component.css']
})
export class AdminBranchClassattendanceComponent {
  attendanceform: FormGroup;
  attendance: AttendanceResponse[] = [];

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private service: TeacherService
  ) {}

  ngOnInit(): void {
    // this.getAllAttendance();
    this.attendanceform = new FormGroup({
      date: new FormControl('')
    })
  }

  onSubmit(): void {
    const classId = +this.route.snapshot.paramMap.get('id');
    const dateValue = this.attendanceform.get('date').value;
    const date = new Date(dateValue);
    // this.getAttendance(classId, date);
  }
  // getAllAttendance(){
  //   const classId = +this.route.snapshot.paramMap.get('id');
  //   this.service.getAllAttendance(classId).subscribe((res) =>{
  //     this.attendance = res;
  //     console.log(res);
  //   })
  // }
  // private getAttendance(classId: number, date: Date): void {
  //   this.service.getAttendance(classId, date).subscribe(
  //     response => this.attendance = response,
  //     error => console.error(error)
  //   );
  // }
}
