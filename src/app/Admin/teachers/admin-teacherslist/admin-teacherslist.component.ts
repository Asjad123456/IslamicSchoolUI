import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/Models/user';
import { AdminService } from 'src/Services/admin.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-admin-teacherslist',
  templateUrl: './admin-teacherslist.component.html',
  styleUrls: ['./admin-teacherslist.component.css']
})
export class AdminTeacherslistComponent {
  user: User[];
  teachercount: number;
  enteredSearchValue: string = '';
  searchText: string = '';
  previousUrl: string;


  constructor(private service: AdminService, private router: Router, private location: Location, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.TeachersList();
    this.teachersCount();
  }
  TeachersList(){
    this.service.getTeachers().subscribe((res) =>{
      this.user = res;
      console.warn(res);
    })
  }
  toTeacherProfile(id: string){
    this.service.getTeachers().subscribe((res) =>{
      this.user = res;
      this.router.navigate(['admin-teacherslist/admin-teacherprofile/' + id])
    })
  }
  onBack(){
    const adminId = this.route.snapshot.params['id'];
    this.router.navigate(['admin-panel/' + adminId]);
  }
  teachersCount(){
    this.service.getTeachersCount().subscribe((res) =>{
      console.warn(res);
      this.teachercount = res;
    })
  }
  onSearchTextChanged(){
    this.searchText = this.enteredSearchValue.toLowerCase();
    console.log(this.searchText)
  }
}
