import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudyClass } from 'src/Models/StudyClass';
import { AdminService } from 'src/Services/admin.service';

@Component({
  selector: 'app-admin-branch-class-studentlist',
  templateUrl: './admin-branch-class-studentlist.component.html',
  styleUrls: ['./admin-branch-class-studentlist.component.css']
})
export class AdminBranchClassStudentlistComponent {
  class: StudyClass[];
  branchid: string;


  constructor(private service:AdminService, private route: ActivatedRoute, private router: Router){}

  classId = +this.route.snapshot.params['id'];
  branchId = localStorage.getItem('branchID');
  ngOnInit(): void{
    console.log(this.classId);
    console.log(this.branchId);
    this.getClassDetails();

  }
  getClassDetails = () => {
    console.log(this.classId);
    const id =+this.route.snapshot.params['id'];
    this.service.getClassById(id).subscribe((res) =>{
      this.class = res;
      console.warn(res);
    })
  }
  toStudentProfile(id:number){
    this.service.getClassById(id).subscribe(
      response =>{
        this.router.navigate(['admin-branchprofile/' + this.branchId + '/class-list/class-profile/'+ this.classId + '/student-list/' + id]);
      }
    );
  }
}
