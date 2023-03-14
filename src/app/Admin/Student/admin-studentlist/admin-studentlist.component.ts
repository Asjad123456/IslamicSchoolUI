import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/Models/students';
import { AdminService } from 'src/Services/admin.service';

@Component({
  selector: 'app-admin-studentlist',
  templateUrl: './admin-studentlist.component.html',
  styleUrls: ['./admin-studentlist.component.css']
})
export class AdminStudentlistComponent {
  student: Student[];
  studentscount: number;
  enteredSearchValue: string = '';
  searchText: string = '';

  constructor(private service: AdminService, private router: Router){}

  ngOnInit(): void{
    this.getStudents();
    this.studentCount();
  }
  getStudents(){
    this.service.getStudents().subscribe((res) =>{
      this.student = res;
      console.log(res);
    })
  }
  toStudentProfile(id: number){
    this.service.getStudentById(id).subscribe(() =>{
      this.router.navigate(['admin-studentlist/admin-studentprofile/' + id]);
    })
  }
  studentCount(){
    this.service.getStudentsCount().subscribe((res) =>{
      this.studentscount = res;
    })
  }
  onSearchTextChanged(){
    this.searchText = this.enteredSearchValue.toLowerCase();
    console.log(this.searchText)
  }
  onback(){
    const adminId = localStorage.getItem('adminID');
    this.router.navigate(['admin-panel/' + adminId]);
  }
}
