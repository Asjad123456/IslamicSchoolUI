import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SupervisorForEdit } from 'src/Models/supervisorForUpdate';
import { User } from 'src/Models/user';
import { SupervisorService } from 'src/Services/supervisor.service';

@Component({
  selector: 'app-supervisor-profile',
  templateUrl: './supervisor-profile.component.html',
  styleUrls: ['./supervisor-profile.component.css']
})
export class SupervisorProfileComponent {
  editSupervisorProfileForm: FormGroup;
  user: User[];
  supervisoredit: SupervisorForEdit[];

  constructor(private route: ActivatedRoute, private service: SupervisorService, private router: Router, private fb:FormBuilder){}

  ngOnInit(): void{
    this.editSupervisorProfileForm= this.fb.group({
      userName: [''],
      fatherName: [''],
      email: [''],
      phoneNumber: [''],
      address: ['']
    })
    this.getSupervisorDetails();
    this.populateEditForm();
  }
  getSupervisorDetails(){
   const supervisorId = this.route.snapshot.params['id'];
   this.service.getSupervisorById(supervisorId).subscribe((res) =>{
    this.user = res;
    console.log(res)
   })
  }
  editProfile(){
    const id = this.route.snapshot.params['id'];
    this.service.updateProfile(id, this.editSupervisorProfileForm.value).subscribe(() =>{
      this.getSupervisorDetails();
      this.populateEditForm();
      console.warn('done');
    })
  }
  populateEditForm(){
    const id = this.route.snapshot.params['id'];
    this.service.getSupervisorById(id).subscribe((res) =>{
        this.editSupervisorProfileForm.controls['userName'].setValue(res[0]?.userName);
        this.editSupervisorProfileForm.controls['fatherName'].setValue(res[0]?.fatherName);
        this.editSupervisorProfileForm.controls['email'].setValue(res[0]?.email);
        this.editSupervisorProfileForm.controls['phoneNumber'].setValue(res[0]?.phoneNumber);
        this.editSupervisorProfileForm.controls['address'].setValue(res[0]?.address);
      console.warn(res)
    })
  }
}
