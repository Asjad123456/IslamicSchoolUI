import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Branches } from 'src/Models/branches';
import { SupervisorService } from 'src/Services/supervisor.service';

@Component({
  selector: 'app-supervisor-branchprofile',
  templateUrl: './supervisor-branchprofile.component.html',
  styleUrls: ['./supervisor-branchprofile.component.css']
})
export class SupervisorBranchprofileComponent {
  branch: Branches[];
  classCount: number;

  constructor(private route: ActivatedRoute, private service: SupervisorService, private router: Router){}

  ngOnInit(): void{
    this.getBranchDetails();
    this.getclassesCount();
  }

  getBranchDetails(){
    const id = +this.route.snapshot.params['id']
    this.service.getBranchById(id).subscribe((res) =>{
      this.branch = res;
      console.log(res);
    })
  }
  getclassesCount(){
    const branchId = +this.route.snapshot.params['id'];
    this.service.gwtStudyClassCountForBranch(branchId).subscribe((res) =>{
      this.classCount = res;
    })
  }
  toclassesList(){
    const branchId = +this.route.snapshot.params['id'];
    this.router.navigate(['supervisor-panel/supervisor-branchprofile/' + branchId + '/classlist']);
  }
}
