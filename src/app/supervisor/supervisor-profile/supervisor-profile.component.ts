import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/Models/user';
import { SupervisorService } from 'src/Services/supervisor.service';

@Component({
  selector: 'app-supervisor-profile',
  templateUrl: './supervisor-profile.component.html',
  styleUrls: ['./supervisor-profile.component.css']
})
export class SupervisorProfileComponent {
  constructor(private route: ActivatedRoute, private service: SupervisorService, private router: Router){}
  user: User[];

  ngOnInit(): void{
    this.getSupervisorDetails();
  }
  getSupervisorDetails(){
   const supervisorId = this.route.snapshot.params['id'];
   this.service.getSupervisorById(supervisorId).subscribe((res) =>{
    this.user = res;
    console.log(res)
   })
  }
}
