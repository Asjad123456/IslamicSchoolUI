import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Branches } from 'src/Models/branches';
import { SupervisorService } from 'src/Services/supervisor.service';

@Component({
  selector: 'app-supervisor-branchprofile',
  templateUrl: './supervisor-branchprofile.component.html',
  styleUrls: ['./supervisor-branchprofile.component.css']
})
export class SupervisorBranchprofileComponent {
  branch: Branches[];

  constructor(private route: ActivatedRoute, private service: SupervisorService){}

  ngOnInit(): void{
    this.getBranchDetails();
  }

  getBranchDetails(){
    const id = +this.route.snapshot.params['id']
    this.service.getBranchById(id).subscribe((res) =>{
      this.branch = res;
      console.log(res);
    })
  }
}
