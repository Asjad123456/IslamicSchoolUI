import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/Models/students';
import { AdminService } from 'src/Services/admin.service';

@Component({
  selector: 'app-admin-studentprofile',
  templateUrl: './admin-studentprofile.component.html',
  styleUrls: ['./admin-studentprofile.component.css']
})
export class AdminStudentprofileComponent {
  student: Student[];

  constructor(private service:AdminService, private route: ActivatedRoute){}

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
}
