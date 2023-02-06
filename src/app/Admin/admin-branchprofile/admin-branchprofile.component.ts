import { Component } from '@angular/core';
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

  ngOnInit(): void{
    this.getBranchDetails();
    // this.getBranchData(this.branch.id);
  }
  getBranchDetails = () => {
    const id: string = this.route.snapshot.params['id'];
    const apiUrl: string = `Branch/${id}`;
    this.service.getBranchDetails(apiUrl)
    .subscribe({
      next: (own: Branches) => {
        this.branch = own;
        console.log(own);
      },
    })
  }
  // getBranchData(id: number){
  //   this.service.getBranch(id).subscribe(
  //     response =>{
  //       console.log(response);
  //     },error =>{
  //       console.log(error);
  //     }
  //   );
  // }
}
