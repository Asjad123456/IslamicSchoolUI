import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudyClass } from 'src/Models/StudyClass';
import { Teacher } from 'src/Models/teacher';
import { SupervisorService } from 'src/Services/supervisor.service';
import { TeacherService } from 'src/Services/teacher.service';

@Component({
  selector: 'app-teacher-classprofile',
  templateUrl: './teacher-classprofile.component.html',
  styleUrls: ['./teacher-classprofile.component.css']
})
export class TeacherClassprofileComponent {
  studyclass: StudyClass[];
  classtostudent: StudyClass;
  addStudentForm: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private service: TeacherService){}

  ngOnInit(): void{
    this.addStudentForm = new FormGroup({
      name: new FormControl('', Validators.required),
      fatherName: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      regNumber: new FormControl('', Validators.required),
      rollNumber: new FormControl('', Validators.required),
      contactNumber: new FormControl('', Validators.required),
      // guardianName: new FormControl('', Validators.required),
      // guardianFatherName: new FormControl('', Validators.required),
      // cnic: new FormControl('', Validators.required),
      // guardianAddress: new FormControl('', Validators.required),
      // phoneNumber: new FormControl('', Validators.required),
      branchId: new FormControl('', Validators.required),
      studyClassId: new FormControl('', Validators.required)
    });
    this.service.getClassById(this.route.snapshot.params['id']).subscribe((res) => {
      const branchIdValue = res[0].branchId;
      const classIdValue = res[0].id;
      this.addStudentForm.get('branchId').setValue(branchIdValue);
      this.addStudentForm.get('studyClassId').setValue(branchIdValue);
    });
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
  addStudent(){
    this.service.addStudent(this.addStudentForm.value).subscribe((res) =>{
      console.log(res);
    })
  }
}
