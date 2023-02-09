import { Component } from '@angular/core';
import { User } from 'src/Models/user';
import { AdminService } from 'src/Services/admin.service';

@Component({
  selector: 'app-admin-supervisorlist',
  templateUrl: './admin-supervisorlist.component.html',
  styleUrls: ['./admin-supervisorlist.component.css']
})
export class AdminSupervisorlistComponent {
  user: User[];

  constructor(private service: AdminService){}

  ngOnInit(): void{
  this.getSupervisors();
  }
  getSupervisors(){
    this.service.getSupervisors().subscribe((res) =>{
      this.user = res;
      console.warn(res);
    })
  }
}
