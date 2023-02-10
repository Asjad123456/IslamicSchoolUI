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
  constructor(private service: AdminService, private router: Router){}

  ngOnInit(): void{
    this.getStudents();
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
}
