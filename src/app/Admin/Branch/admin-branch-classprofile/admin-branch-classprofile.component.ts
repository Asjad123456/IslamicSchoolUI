import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StudyClass } from 'src/Models/StudyClass';
import { AdminService } from 'src/Services/admin.service';

@Component({
  selector: 'app-admin-branch-classprofile',
  templateUrl: './admin-branch-classprofile.component.html',
  styleUrls: ['./admin-branch-classprofile.component.css']
})
export class AdminBranchClassprofileComponent {
  class: StudyClass[];
  editClassForm: FormGroup;

  constructor(private service:AdminService, private route: ActivatedRoute, private fb:FormBuilder){}

  ngOnInit(): void{
    this.editClassForm= this.fb.group({
      className: [''],
      classTime: ['']
  })
    this.editClass();
    this.getClassDetails();
    console.log(+this.route.snapshot.params['id']);
  }
  getClassDetails = () => {
    const id =+this.route.snapshot.params['id'];
    this.service.getClassById(id).subscribe((res) =>{
      this.class = res;
      console.warn(res);
    })
  }
  editClass(){
    const id =+this.route.snapshot.params['id'];
    this.service.getClassById(id).subscribe((res) =>{
        this.editClassForm.controls['className'].setValue(res[0]?.className);
        this.editClassForm.controls['classTime'].setValue(res[0]?.classTime);
      console.warn(res)
    })
  }
  editClassData(){
    const id =+this.route.snapshot.params['id'];
    this.service.updateClass(id, this.editClassForm.value).subscribe(() =>{
      this.getClassDetails();
      this.editClass();
      console.warn('done');
    })
  }
}
