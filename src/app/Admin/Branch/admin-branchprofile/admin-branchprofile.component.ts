import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Branches } from 'src/Models/branches';
import { AdminService } from 'src/Services/admin.service';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/Models/user';

@Component({
  selector: 'app-admin-branchprofile',
  templateUrl: './admin-branchprofile.component.html',
  styleUrls: ['./admin-branchprofile.component.css']
})
export class AdminBranchprofileComponent {
  public branchId: number;
  branch: Branches[];
  supervisors: User[];
  editBranchForm: FormGroup;
  studyClassCount: number;
  teachersCount: number;
  previousUrl: string;

  constructor(private router: Router, private service:AdminService, private route: ActivatedRoute, private fb:FormBuilder, private location: Location, private snackBar: MatSnackBar){}

  ngOnInit(): void{
    this.editBranchForm= this.fb.group({
      branchName: [''],
      city: [''],
      address: [''],
      branchCode: [''],
      AppUserId: ['']
    })
    this.route.params.subscribe(params => {
      this.previousUrl = `/admin/${params['id']}/brancheslist`;
    });
    this.getBranchDetails();
    console.log(this.route.snapshot.params['id']);
    this.editBranch();
    this.getStudyClassCount();
    this.getTeachersCount();
    this.GetSupervisors();
  }
  getBranchDetails = () => {
    const id =+this.route.snapshot.params['id'];
    this.service.getBranchById(id).subscribe((res) =>{
      this.branch = res;
      console.warn(res);
    })
  }
  editBranch(){
    const id =+this.route.snapshot.params['id'];
    this.service.getBranchById(id).subscribe((res) =>{
        this.editBranchForm.controls['branchName'].setValue(res[0]?.branchName);
        this.editBranchForm.controls['city'].setValue(res[0]?.city);
        this.editBranchForm.controls['address'].setValue(res[0]?.address);
        this.editBranchForm.controls['branchCode'].setValue(res[0]?.branchCode);
      console.warn(res)
    })
  }
  editBranchData(){
    const id =+this.route.snapshot.params['id'];
    this.service.updateBranch(id, this.editBranchForm.value, this.editBranchForm.get('AppUserId').value).subscribe((res) =>{
      console.log(res);
      this.getBranchDetails();
      this.editBranch();
      this.GetSupervisors();
      console.warn('done');
      this.snackBar.open('Updated SuccessFully!', 'Close', {
        duration: 3000,
        panelClass: 'success-snackbar'
      });
    })
  }
  
  onBack(){
    this.router.navigate(['admin-brancheslist']);
  }
  getStudyClassCount(){
    const branchId = +this.route.snapshot.params['id'];
    this.service.gwtStudyClassCountForBranch(branchId).subscribe((res) =>{
      this.studyClassCount = res;
    })
  }
  getTeachersCount(){
    const branchId = +this.route.snapshot.params['id'];
    this.service.getTeacherCountorBranch(branchId).subscribe((res) =>{
      this.teachersCount = res;
    })
  }
  toClassList(){
    const branchId = +this.route.snapshot.params['id'];
    this.router.navigate(['admin-branchprofile/' + branchId + '/class-list']);
    const currentRoute = this.router.url;
    localStorage.setItem('lastRoute', currentRoute);
  }
  toTeacherList(){
    const branchId = +this.route.snapshot.params['id'];
    this.router.navigate(['admin-branchprofile/' + branchId + '/class-list']);
    const currentroute = this.router.url;
    localStorage.setItem('previousUrl', currentroute);
  }
  toTeachersList(){
    const branchId = +this.route.snapshot.params['id'];
    this.router.navigate(['admin-branchprofile/' + branchId + '/teachers-list']);
  }
  logout(){
    this.router.navigate(['welcome']);
    localStorage.clear();
  }
  ToAdminPanel(){
    const adminId = localStorage.getItem('loggedInUserId');
    this.router.navigate(['admin-panel/' + adminId]);
  }
  GetSupervisors(){
    this.service.getUserforbranchSupervisor().subscribe(src =>{
      this.supervisors = src;
      console.log(src);
    })
  }
}
