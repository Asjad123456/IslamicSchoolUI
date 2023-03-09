import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Branches } from 'src/Models/branches';
import { AdminService } from 'src/Services/admin.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-admin-branchprofile',
  templateUrl: './admin-branchprofile.component.html',
  styleUrls: ['./admin-branchprofile.component.css']
})
export class AdminBranchprofileComponent {
  public branchId: number;
  branch: Branches[];
  editBranchForm: FormGroup;
  studyClassCount: number;
  teachersCount: number;
  previousUrl: string;

  constructor(private router: Router, private service:AdminService, private route: ActivatedRoute, private fb:FormBuilder, private location: Location){}

  ngOnInit(): void{
    this.editBranchForm= this.fb.group({
      branchName: [''],
      city: [''],
      address: [''],
      branchCode: [''],
    })
    this.route.params.subscribe(params => {
      this.previousUrl = `/admin/${params['id']}/brancheslist`;
    });
    this.getBranchDetails();
    console.log(this.route.snapshot.params['id']);
    this.editBranch();
    this.getStudyClassCount();
    this.getTeachersCount();
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
    this.service.updateBranch(id, this.editBranchForm.value).subscribe(() =>{
      this.getBranchDetails();
      this.editBranch();
      console.warn('done');
    })
  }
  onBack(){
    this.router.navigateByUrl(this.previousUrl);
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
  }
  toTeacherList(){
    const branchId = +this.route.snapshot.params['id'];
    this.router.navigate(['admin-branchprofile/' + branchId + '/class-list']);
  }
  toTeachersList(){
    const branchId = +this.route.snapshot.params['id'];
    this.router.navigate(['admin-branchprofile/' + branchId + '/teachers-list']);
  }

}
