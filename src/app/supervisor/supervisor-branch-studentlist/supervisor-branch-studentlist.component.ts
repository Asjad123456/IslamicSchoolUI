import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Branches } from 'src/Models/branches';
import { SupervisorService } from 'src/Services/supervisor.service';

@Component({
  selector: 'app-supervisor-branch-studentlist',
  templateUrl: './supervisor-branch-studentlist.component.html',
  styleUrls: ['./supervisor-branch-studentlist.component.css']
})
export class SupervisorBranchStudentlistComponent {

  branch: Branches[];

  constructor(private route: ActivatedRoute, private router: Router, private service: SupervisorService){}

  ngOnInit(): void{
    console.log(+this.route.snapshot.params['id']);
    this.getStudentDetails();
  }
  getStudentDetails(){
    const branchId = +this.route.snapshot.params['id'];
    this.service.getBranchById(branchId).subscribe((res) =>{
      this.branch = res;
      console.log(res);
    })
  }
  toStudentProfile(){
    const branchId = +this.route.snapshot.params['id'];
    this.service.getBranchById(branchId).subscribe((res) =>{
      this.branch = res;
      console.log(res);
      this.router.navigate(['supervisor-panel/supervisor-branchprofile/'+ branchId + '/studentlist/studentprofile/' + this.branch[0].students[0].id])
    })
  }
}
