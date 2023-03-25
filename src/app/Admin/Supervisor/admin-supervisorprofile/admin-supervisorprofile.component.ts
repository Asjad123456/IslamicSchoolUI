import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Branches } from 'src/Models/branches';
import { User } from 'src/Models/user';
import { AdminService } from 'src/Services/admin.service';

@Component({
  selector: 'app-admin-supervisorprofile',
  templateUrl: './admin-supervisorprofile.component.html',
  styleUrls: ['./admin-supervisorprofile.component.css']
})
export class AdminSupervisorprofileComponent {
  user: User[];
  branch: Branches[];
  addBranchForm: FormGroup;

  constructor(private router: Router, private service:AdminService, private route: ActivatedRoute, private fb:FormBuilder){}

  ngOnInit(): void{
    this.addBranchForm = new FormGroup({
      branchid: new FormControl('', Validators.required),
    })
    this.getSupervisorDetails();
    this.getBranches();
  }

  getSupervisorDetails = () => {
    const id = this.route.snapshot.params['id'];
    this.service.getSupervisorById(id).subscribe((res) =>{
      this.user = res;
      console.warn(res);
    })
  }
  getBranches(){
    this.service.getBranches().subscribe((res) =>{
      this.branch = res;
    })
  }
  addsupervisorbranch(){
    const id = this.route.snapshot.params['id'];
    this.service.AddBranchForSupervisor(id, this.addBranchForm.value).subscribe((res) =>{
      console.warn('done',res);
    })

  }
  toSupervisorBranch(id: number){
    this.router.navigate(['admin-supervisor-branchprofile/' + id]);
    const supervisorId = this.route.snapshot.params['id'];
    localStorage.setItem('supervisorId', supervisorId);
  }
  onback(){
    this.router.navigate(['admin-supervisorlist']);
  }
  logout(){
    this.router.navigate(['welcome']);
    localStorage.clear();
  }
  ToAdminPanel(){
    const adminId = localStorage.getItem('loggedInUserId');
    this.router.navigate(['admin-panel/' + adminId]);
  }
}
