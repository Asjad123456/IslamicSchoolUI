import { Component, NgIterable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Branches } from 'src/Models/branches';
import { AdminService } from 'src/Services/admin.service';

@Component({
  selector: 'app-admin-branch-classlist',
  templateUrl: './admin-branch-classlist.component.html',
  styleUrls: ['./admin-branch-classlist.component.css']
})
export class AdminBranchClasslistComponent {
  branch: Branches[];
  constructor(private router: Router, private service:AdminService, private route: ActivatedRoute){}

  ngOnInit(): void{
    this.getBranchDetails();
  }

  getBranchDetails = () => {
    const id =+this.route.snapshot.params['id'];
    this.service.getBranchdetailsforclasslist(id).subscribe((res) =>{
      this.branch = res;
      console.log(res);
    })
  }
}
