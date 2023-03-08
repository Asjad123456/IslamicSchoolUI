import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudyClass } from 'src/Models/StudyClass';
import { TeacherService } from 'src/Services/teacher.service';

@Component({
  selector: 'app-teacher-class-studentlist',
  templateUrl: './teacher-class-studentlist.component.html',
  styleUrls: ['./teacher-class-studentlist.component.css']
})
export class TeacherClassStudentlistComponent {
  studyclass: StudyClass[];
  classtostudent: StudyClass;
  addStudentForm: FormGroup;
  studentcount: number;
  searchText: string = '';

  constructor(private route: ActivatedRoute, private router: Router, private service: TeacherService){}

  ngOnInit(): void{
    this.addStudentForm = new FormGroup({
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
      phoneNumber: new FormControl('', Validators.required),
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
    this.getStudentCount();
  }

  getStudentCount(){
    const classid = +this.route.snapshot.params['id'];
    this.service.getStudentsCountForclassprofile(classid).subscribe((res) =>{
      this.studentcount = res;
      console.log('hello', res);
      console.log(classid);
    })
  }
  addStudent(){
    this.service.addStudent(this.addStudentForm.value).subscribe((res) =>{
      console.log(res);
    })
  }
  getClassDetail(){
    const classId = +this.route.snapshot.params['id'];
    this.service.getClassById(classId).subscribe((res) =>{
      this.studyclass = res;
      console.log(res);
    })
  }
  onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
    console.log(this.searchText);
  }
  toStudentProfile(id: number){
    const classID = +this.route.snapshot.params['id'];
    this.router.navigate(['teacher-panel/classlist/classprofile/' + classID + '/studentprofile/' + id]);
    console.log(id);
  }
}
