import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { User } from 'src/Models/user';
import { AdminService } from 'src/Services/admin.service';
import { Location } from '@angular/common';
import { AccountService } from 'src/Services/account.service';

@Component({
  selector: 'app-admin-supervisorlist',
  templateUrl: './admin-supervisorlist.component.html',
  styleUrls: ['./admin-supervisorlist.component.css']
})
export class AdminSupervisorlistComponent {
  user: User[];
  admincount: number;
  previousUrl: string;
  enteredSearchValue: string = '';
  searchText: string = '';

  constructor(private service: AdminService, private router: Router, private location: Location, private route: ActivatedRoute){}

  ngOnInit(): void{
  this.route.params.subscribe(params => {
    this.previousUrl = `/admin-panel/${params['id']}`;
  });
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
    const adminId = localStorage.getItem('adminID');
    this.router.navigate(['admin-panel/'+ adminId]);
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