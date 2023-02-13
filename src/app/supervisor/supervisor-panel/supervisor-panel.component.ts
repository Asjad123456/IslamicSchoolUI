import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/Models/user';
import { SupervisorService } from 'src/Services/supervisor.service';

@Component({
  selector: 'app-supervisor-panel',
  templateUrl: './supervisor-panel.component.html',
  styleUrls: ['./supervisor-panel.component.css']
})
export class SupervisorPanelComponent {
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
  toadminprofile(){
    const supervisorId = this.route.snapshot.params['id'];
    this.router.navigate(['supervisor-profile/' + supervisorId]);
  }
}
