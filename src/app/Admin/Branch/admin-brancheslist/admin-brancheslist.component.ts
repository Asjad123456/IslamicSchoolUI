import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Branches } from 'src/Models/branches';
import { User } from 'src/Models/user';
import { AdminService } from 'src/Services/admin.service';

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

  constructor(private service:AdminService, private router: Router){}


  ngOnInit(): void {
    this.getbranches();
    this.getUsersforSupervisors();
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
}
