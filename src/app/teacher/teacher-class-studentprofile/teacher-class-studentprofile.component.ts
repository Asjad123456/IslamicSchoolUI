import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private service: TeacherService){}

  ngOnInit(): void{
    this.editStudentForm = new FormGroup({
      name: new FormControl('', Validators.required),
      fatherName: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      regNumber: new FormControl('', Validators.required),
      rollNumber: new FormControl('', Validators.required),
      contactNumber: new FormControl('', Validators.required),
      guardianName: new FormControl('', Validators.required),
      guardianFatherName: new FormControl('', Validators.required),
      cnic: new FormControl('', Validators.required),
      guardianAddress: new FormControl('', Validators.required),
      guardianContactNumber: new FormControl('', Validators.required),
      branchId: new FormControl('', Validators.required),
      studyClassId: new FormControl('', Validators.required)
    });
    console.log(+this.route.snapshot.params['id']);
    this.getStudentDetail();
    this.populateForm()
  }

  getStudentDetail(){
    const studentId = +this.route.snapshot.params['id'];
    this.service.getStudentById(studentId).subscribe((res) =>{
      this.student = res;
      console.log(res);
    })
  }
  populateForm(){
    const id =+this.route.snapshot.params['id'];
    this.service.getStudentById(id).subscribe((res) =>{
        this.editStudentForm.controls['name'].setValue(res[0]?.name);
        this.editStudentForm.controls['fatherName'].setValue(res[0]?.fatherName);
        this.editStudentForm.controls['regNumber'].setValue(res[0]?.regNumber);
        this.editStudentForm.controls['rollNumber'].setValue(res[0]?.rollNumber);
        this.editStudentForm.controls['contactNumber'].setValue(res[0]?.contactNumber);
        this.editStudentForm.controls['guardianName'].setValue(res[0]?.guardianName);
        this.editStudentForm.controls['guardianFatherName'].setValue(res[0]?.guardianFatherName);
        this.editStudentForm.controls['cnic'].setValue(res[0]?.cnic);
        this.editStudentForm.controls['guardianContactNumber'].setValue(res[0]?.guardianContactNumber);
        this.editStudentForm.controls['guardianAddress'].setValue(res[0]?.guardianAddress);
      console.warn(res)
    })
  }
  editData(){
    const studentId = +this.route.snapshot.params['id'];
    this.service.updateStudent(studentId, this.editStudentForm.value).subscribe((res) =>{
      console.log(res);
      this.getStudentDetail();
    },error =>{
      console.error(error);
    })
  }
}
