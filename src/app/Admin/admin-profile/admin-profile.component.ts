import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/Models/user';
import { AdminService } from 'src/Services/admin.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent {
  user: User[];
  editProfileForm: FormGroup;

  constructor(private service: AdminService, private route: ActivatedRoute, private fb:FormBuilder,
     private snackBar: MatSnackBar, private router: Router){}

  ngOnInit(): void {
    this.editProfileForm= this.fb.group({
      userName: [''],
      fatherName: [''],
      email: [''],
      address: [''],
      phoneNumber: [''],
    })
    this.getAdminData();
    this.populateForm();
  }

  getAdminData(){
    const AdminId = this.route.snapshot.params['id'];
    this.service.getAdminById(AdminId).subscribe((res) =>{
      this.user = res;
    })
  }
  populateForm(){
    const id = this.route.snapshot.params['id'];
    this.service.getAdminById(id).subscribe((res) =>{
        this.editProfileForm.controls['userName'].setValue(res[0]?.userName);
        this.editProfileForm.controls['fatherName'].setValue(res[0]?.fatherName);
        this.editProfileForm.controls['email'].setValue(res[0]?.email);
        this.editProfileForm.controls['address'].setValue(res[0]?.address);
        this.editProfileForm.controls['phoneNumber'].setValue(res[0]?.phoneNumber);
      console.warn(res)
    })
  }
  editProfile(){
    const id = this.route.snapshot.params['id'];
    this.service.updateProfile(id, this.editProfileForm.value).subscribe(() =>{
      this.getAdminData();
      console.warn('done');
      this.snackBar.open('Profile Updated!', 'Close', {
        duration: 3000,
        panelClass: 'success-snackbar'
      });
    }, error =>{
      this.snackBar.open('Error Saving Changes!', 'Close', {
        duration: 3000,
        panelClass: 'success-snackbar'
      });
    })
  }
  onBack(){
    const id = this.route.snapshot.params['id'];
    this.router.navigate(['admin-panel/' + id]);
  }
}
