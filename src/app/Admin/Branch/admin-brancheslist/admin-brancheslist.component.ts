import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Branches } from 'src/Models/branches';
import { User } from 'src/Models/user';
import { AdminService } from 'src/Services/admin.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admin-brancheslist',
  templateUrl: './admin-brancheslist.component.html',
  styleUrls: ['./admin-brancheslist.component.css']
})
export class AdminBrancheslistComponent implements OnInit{

  branch: Branches[];
  branchsupervisors: User[];
  searchText: string = '';
  addBranchForm: FormGroup;
  supName: string;
  branchescount: number;
  previousUrl: string;

  constructor(private service:AdminService, private router: Router, private location: Location, private route: ActivatedRoute){}


  ngOnInit(): void {
    this.getbranches();
    this.getUsersforSupervisors();
    this.branchesCount();
    console.error(localStorage.getItem('adminID'));
    this.addBranchForm = new FormGroup({
      branchName: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      branchCode: new FormControl('', Validators.required),
      AppUserId: new FormControl('', Validators.required)
    });
  }
  getbranches(){
    this.service.getBranches().subscribe(src =>{
      this.branch = src;
      console.log(src);
    })
  }
  addBranch() {
    console.log(this.addBranchForm.value);
    this.service.addBracnh(this.addBranchForm.value).subscribe(
      response => {
        this.getbranches();
        console.log(response);
        console.log("done");
        this.addBranchForm.reset();
      },
      (error) => {
        console.log(error);
      }
    );
  }
  deleteBranch(id: number){
    this.service.deleteBranch(id)
    .subscribe(
      response =>{
        this.getbranches();
        this.getUsersforSupervisors();
      },error =>{
        console.error(error)
      }
    )
  }
  toBranchProfile(id:number){
    this.service.getBranch(id).subscribe(
      response =>{
        this.router.navigate(['admin-branchprofile/'+ id])
      }
    );
  }
  getUsersforSupervisors(){
    this.service.getUserforbranchSupervisor().subscribe(src =>{
      this.branchsupervisors = src;
      console.log(src);
    })
  }
  onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
    console.log(this.searchText);
  }
  selectSupervisor(item: User) {
    // Update form control value with the supervisor's name
    this.addBranchForm.get('AppUserId').setValue(item.id);
    this.supName = item.userName;
    console.log(item.userName);
  }
  onBack(){
    const adminId = localStorage.getItem('adminID');
    this.router.navigate(['admin-panel/' + adminId]);
  }
  branchesCount(){
    this.service.getBranchesCount().subscribe((res) =>{
      this.branchescount = res;
    })
  }
}
