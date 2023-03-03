import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/Models/students';
import { AdminService } from 'src/Services/admin.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admin-branch-class-studentprofile',
  templateUrl: './admin-branch-class-studentprofile.component.html',
  styleUrls: ['./admin-branch-class-studentprofile.component.css']
})
export class AdminBranchClassStudentprofileComponent {
  student: Student[];

  constructor(private service:AdminService, private route: ActivatedRoute, private location: Location){}

  ngOnInit(): void{
    this.getStudentDetails();
  }

  getStudentDetails = () => {
    const id =+this.route.snapshot.params['id'];
    this.service.getStudentById(id).subscribe((res) =>{
      this.student = res;
      console.warn(res);
    })
  }
  onback(){
    this.location.back();
  }
}
