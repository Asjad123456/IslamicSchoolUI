import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Branches } from 'src/Models/branches';
import { User } from 'src/Models/user';
import { SupervisorService } from 'src/Services/supervisor.service';

@Component({
  selector: 'app-supervisor-branch-classlist',
  templateUrl: './supervisor-branch-classlist.component.html',
  styleUrls: ['./supervisor-branch-classlist.component.css']
})
export class SupervisorBranchClasslistComponent {
  branch: Branches[];
  user: User[];

  constructor(private route: ActivatedRoute, private service: SupervisorService){}

  ngOnInit(): void{
    console.log(+this.route.snapshot.params['id']);
    this.getbranchdetails();
    this.getTeachersList();
  }

  getbranchdetails(){
    const id = +this.route.snapshot.params['id'];
    this.service.getBranchById(id).subscribe((res) =>{
      this.branch = res;
      console.log(res);
    })
  }
  getTeachersList(){
    this.service.getTeachersforlist().subscribe((res) =>{
      console.log(res);
    })
  }
}
