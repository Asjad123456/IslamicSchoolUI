import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/Models/user';
import { AdminService } from 'src/Services/admin.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admin-supervisorlist',
  templateUrl: './admin-supervisorlist.component.html',
  styleUrls: ['./admin-supervisorlist.component.css']
})
export class AdminSupervisorlistComponent {
  user: User[];
  admincount: number;
  enteredSearchValue: string = '';
  searchText: string = '';

  constructor(private service: AdminService, private router: Router, private location: Location){}

  ngOnInit(): void{
  this.getSupervisors();
  this.adminCount();
  }
  getSupervisors(){
    this.service.getSupervisors().subscribe((res) =>{
      this.user = res;
      console.warn(res);
    })
  }
  toSupervisorprofileProfile(id:string){
    this.service.getSupervisorById(id).subscribe(
      response =>{
        this.router.navigate(['admin-supervisorprofile/'+ id])
      }
    );
  }
  onBack(){
    this.location.back()
  }
  adminCount(){
    this.service.getSupervisorCount().subscribe((res) =>{
      console.warn(res);
      this.admincount = res;
    })
  }
  onSearchTextChanged(){
    this.searchText = this.enteredSearchValue.toLowerCase();
    console.log(this.searchText)
  }
}
