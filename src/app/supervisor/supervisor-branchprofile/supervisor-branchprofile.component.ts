import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Branches } from 'src/Models/branches';
import { SupervisorService } from 'src/Services/supervisor.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-supervisor-branchprofile',
  templateUrl: './supervisor-branchprofile.component.html',
  styleUrls: ['./supervisor-branchprofile.component.css']
})
export class SupervisorBranchprofileComponent {
  branch: Branches[];
  classCount: number;
  teachersCount: number;
  studentsCount: number;
  previousUrl: string;


  constructor(private route: ActivatedRoute, private service: SupervisorService, private router: Router){}

  ngOnInit(): void{
    const branchid = this.route.snapshot.params['id'];
    localStorage.setItem('branchid', branchid);
    this.getBranchDetails();
    this.getclassesCount();
    this.getTeachersCount();
    this.getStudentsCount();
  }

  getBranchDetails(){
    const id = +this.route.snapshot.params['id']
    this.service.getBranchById(id).subscribe((res) =>{
      this.branch = res;
      console.log(res);
    })
  }
  getclassesCount(){
    const branchId = +this.route.snapshot.params['id'];
    this.service.gwtStudyClassCountForBranch(branchId).subscribe((res) =>{
      this.classCount = res;
    })
  }
  toclassesList(){
    const branchId = +this.route.snapshot.params['id'];
    this.router.navigate(['supervisor-panel/supervisor-branchprofile/' + branchId + '/classlist']);
  }
  getTeachersCount(){
    const branchId = +this.route.snapshot.params['id'];
    this.service.getTeacherCountforBranch(branchId).subscribe((res) =>{
      this.teachersCount = res;
    })
  }
  getStudentsCount(){
    const branchId = +this.route.snapshot.params['id'];
    this.service.getStudentsCountforBranch(branchId).subscribe((res) =>{
      this.studentsCount = res;
    })
  }
  toTeachersList(){
    const branchId = +this.route.snapshot.params['id'];
    this.router.navigate(['supervisor-panel/supervisor-branchprofile/'+ branchId+'/teacherlist']);
  }
  toStudentsList(){
    const branchId = +this.route.snapshot.params['id'];
    this.router.navigate(['supervisor-panel/supervisor-branchprofile/'+ branchId +'/studentlist']);
    const currentRoute = this.router.url;
    localStorage.setItem('previousUrl', currentRoute);
  }
  onback(){
    const supervisorId = localStorage.getItem('loggedInUserId');
    this.router.navigate(['supervisor-panel/' + supervisorId]); 
    }
}
