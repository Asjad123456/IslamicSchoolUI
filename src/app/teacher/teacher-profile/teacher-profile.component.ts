import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/Models/user';
import { TeacherService } from 'src/Services/teacher.service';

@Component({
  selector: 'app-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrls: ['./teacher-profile.component.css']
})
export class TeacherProfileComponent {
  teacher: User[];
  editProfileForm: FormGroup;

  constructor(private route: ActivatedRoute, private service: TeacherService, private fb:FormBuilder){}

  ngOnInit(): void{
    this.editProfileForm= this.fb.group({
      userName: [''],
      fatherName: [''],
      email: [''],
      phoneNumber: [''],
    })
    console.warn(this.route.snapshot.params['id']);
    this.getTeacherData();
    this.populateEditForm();
  }
  getTeacherData(){
    const teacherId = this.route.snapshot.params['id']
    this.service.getTeacherById(teacherId).subscribe((res) =>{
      this.teacher = res;
      console.log(res);
    })
  }
  populateEditForm(){
    const id = this.route.snapshot.params['id'];
    this.service.getTeacherById(id).subscribe((res) =>{
        this.editProfileForm.controls['userName'].setValue(res[0]?.userName);
        this.editProfileForm.controls['fatherName'].setValue(res[0]?.fatherName);
        this.editProfileForm.controls['email'].setValue(res[0]?.email);
        this.editProfileForm.controls['phoneNumber'].setValue(res[0]?.phoneNumber);
      console.warn(res)
    })
  }
  editProfile(){
    const id = this.route.snapshot.params['id'];
    this.service.updateProfile(id, this.editProfileForm.value).subscribe(() =>{
      this.getTeacherData();
      this.populateEditForm();
      console.warn('done');
    })
  }
}
