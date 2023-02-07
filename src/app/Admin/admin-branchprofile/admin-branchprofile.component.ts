import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Branches } from 'src/Models/branches';
import { AdminService } from 'src/Services/admin.service';

@Component({
  selector: 'app-admin-branchprofile',
  templateUrl: './admin-branchprofile.component.html',
  styleUrls: ['./admin-branchprofile.component.css']
})
export class AdminBranchprofileComponent {
  public branchId: number;
  branch: Branches;

  constructor(private router: Router, private service:AdminService, private route: ActivatedRoute){}
  editBranchForm: FormGroup;

  ngOnInit(): void{
    this.editBranchForm= new FormGroup({
      branchName: new FormControl(''),
      city: new FormControl(''),
      address: new FormControl(''),
      branchCode: new FormControl(''),
    })
    this.getBranchDetails();
    console.log(this.route.snapshot.params['id']);
    this.editBranch();
    // this.getBranchData(this.branch.id);
  }
  getBranchDetails = () => {
    const id =+this.route.snapshot.params['id'];
    this.service.getBranchById(id).subscribe((res) =>{
      this.branch = res;
      console.log(res);
    })
  }
  editBranch(){
    const id =+this.route.snapshot.params['id'];
    this.service.getBranchById(id).subscribe((res) =>{
      this.editBranchForm= new FormGroup({
        branchName: new FormControl(res['branchName']),
        city: new FormControl(res['city']),
        address: new FormControl(res['address']),
        branchCode: new FormControl(res['branchCode']),
      })
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
}
