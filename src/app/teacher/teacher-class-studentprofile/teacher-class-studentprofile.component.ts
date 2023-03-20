import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/Models/students';
import { Teacher } from 'src/Models/teacher';
import { SupervisorService } from 'src/Services/supervisor.service';
import { TeacherService } from 'src/Services/teacher.service';

@Component({
  selector: 'app-teacher-class-studentprofile',
  templateUrl: './teacher-class-studentprofile.component.html',
  styleUrls: ['./teacher-class-studentprofile.component.css']
})
export class TeacherClassStudentprofileComponent {
  student: Student[];
  editStudentForm: FormGroup;
  editGuardianForm: FormGroup;

  constructor(private route: ActivatedRoute, private service: TeacherService, private router: Router, private snackBar: MatSnackBar){}

  ngOnInit(): void{
    this.editStudentForm = new FormGroup({
      name: new FormControl('', Validators.required),
      fatherName: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      regNumber: new FormControl('', Validators.required),
      rollNumber: new FormControl('', Validators.required),
      contactNumber: new FormControl('', Validators.required),
      branchId: new FormControl('', Validators.required),
      studyClassId: new FormControl('', Validators.required)
    });
    this.editGuardianForm = new FormGroup({
      name: new FormControl('', Validators.required),
      fatherName: new FormControl('', Validators.required),
      cnic: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
    })
    console.log(+this.route.snapshot.params['id']);
    this.getStudentDetail();
    this.populateStudentForm();
    this.populateGuardianForm();
  }

  getStudentDetail(){
    const studentId = +this.route.snapshot.params['id'];
    this.service.getStudentById(studentId).subscribe((res) =>{
      this.student = res;
      console.log(res);
    })
  }
  populateStudentForm(){
    const id =+this.route.snapshot.params['id'];
    this.service.getStudentById(id).subscribe((res) =>{
        this.editStudentForm.controls['name'].setValue(res[0]?.name);
        this.editStudentForm.controls['fatherName'].setValue(res[0]?.fatherName);
        this.editStudentForm.controls['regNumber'].setValue(res[0]?.regNumber);
        this.editStudentForm.controls['rollNumber'].setValue(res[0]?.rollNumber);
        this.editStudentForm.controls['contactNumber'].setValue(res[0]?.contactNumber);
        this.editStudentForm.controls['address'].setValue(res[0]?.address);
      console.warn(res)
    })
  }
  populateGuardianForm(){
    const id =+this.route.snapshot.params['id'];
    this.service.getStudentById(id).subscribe((res) =>{
        this.editGuardianForm.controls['name'].setValue(res[0]?.name);
        this.editGuardianForm.controls['fatherName'].setValue(res[0]?.fatherName);
        this.editGuardianForm.controls['cnic'].setValue(res[0]?.cnic);
        this.editGuardianForm.controls['phoneNumber'].setValue(res[0]?.phoneNumber);
        this.editGuardianForm.controls['address'].setValue(res[0]?.address);
      console.warn(res)
    })
  }
  editStudent(){
    const studentId = +this.route.snapshot.params['id'];
    this.service.updateStudent(studentId, this.editStudentForm.value).subscribe((res) =>{
      console.log(res);
      this.getStudentDetail();
      this.snackBar.open('An error occurred, Try Again!', 'Close', {
        duration: 3000,
        panelClass: 'error-snackbar',
      });
    },error =>{
      console.error(error);
    })
  }
  editGuardian(){
    const studentId = +this.route.snapshot.params['id'];
    this.service.getStudentById(studentId).subscribe((res) =>{
      this.student = res;
      this.service.updateGuardian(this.student[0].guardianId, this.editGuardianForm.value).subscribe((res) =>{
        console.log(res);
        this.getStudentDetail();
        this.snackBar.open('An error occurred, Try Again!', 'Close', {
          duration: 3000,
          panelClass: 'error-snackbar',
        });
      },error =>{
        console.error(error);
      })
      console.log(res);
    })
  }
  onBack(){
    const classId = localStorage.getItem('classId');
    this.router.navigate(['teacher-panel/classlist/classprofile/' + classId +'/studentlist']);
    localStorage.removeItem('classId');
  }
}
