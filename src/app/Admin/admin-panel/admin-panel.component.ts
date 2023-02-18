import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/Services/admin.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent {
  constructor(private router: Router, private service: AdminService, private route: ActivatedRoute){}

  ngOnInit(): void {
  }
  toRoleManagmnent(){
    this.router.navigate(['role-managment'])
  }
  toBranchesList(){
    this.router.navigate(['admin-brancheslist']);
  }
  toAdminProfile(){
    const AdminId = this.route.snapshot.params['id'];
    this.router.navigate(['admin-profile/' + AdminId]);
  }
}
