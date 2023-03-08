import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Branches } from 'src/Models/branches';
import { Student } from 'src/Models/students';
import { SupervisorService } from 'src/Services/supervisor.service';

@Component({
  selector: 'app-supervisor-branch-studentlist',
  templateUrl: './supervisor-branch-studentlist.component.html',
  styleUrls: ['./supervisor-branch-studentlist.component.css']
})
export class SupervisorBranchStudentlistComponent {
  studentcount: number;
  branch: Branches[];
  enteredSearchValue: string = '';
  searchText: string = '';

  constructor(private route: ActivatedRoute, private router: Router, private service: SupervisorService){}

  ngOnInit(): void{
    console.log(+this.route.snapshot.params['id']);
    this.getStudentDetails();
    this.getStudentCount();
  }
  getStudentDetails(){
    const branchId = +this.route.snapshot.params['id'];
    this.service.getStudentList(branchId).subscribe((res) =>{
      this.branch = res;
      console.log(res);
      console.log('real');
    },error =>{
      console.log(error);
    })
  }
  onSearchTextChanged(){
    this.searchText = this.enteredSearchValue.toLowerCase();
    console.log(this.searchText)
  }
  toStudentProfile(id: number){
    const branchid = +this.route.snapshot.params['id'];
    this.router.navigate(['supervisor-panel/supervisor-branchprofile/'+branchid+'/studentlist/studentprofile/' + id]);
  }
  getStudentCount(){
    const classid = +this.route.snapshot.params['id'];
    this.service.getStudentsCountForclassprofile(classid).subscribe((res) =>{
      this.studentcount = res;
      console.log('hello', res);
      console.log(classid);
    })
  }
}
