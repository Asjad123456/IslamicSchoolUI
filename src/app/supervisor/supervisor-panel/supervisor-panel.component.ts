import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/Models/user';
import { SupervisorService } from 'src/Services/supervisor.service';

@Component({
  selector: 'app-supervisor-panel',
  templateUrl: './supervisor-panel.component.html',
  styleUrls: ['./supervisor-panel.component.css']
})
export class SupervisorPanelComponent {
  constructor(private route: ActivatedRoute, private service: SupervisorService, private router: Router, private snackBar: MatSnackBar){}
  user: User[];
  userforredirect: User;

  ngOnInit(): void{
    localStorage.setItem('  ', this.route.snapshot.params['id']);
    this.getSupervisorDetails();
  }
  getSupervisorDetails(){
   const supervisorId = this.route.snapshot.params['id'];
   this.service.getSupervisorById(supervisorId).subscribe((res) =>{
    this.user = res;
    console.log(res);
   })
  }
  toadminprofile(){
    const supervisorId = this.route.snapshot.params['id'];
    this.router.navigate(['supervisor-profile/' + supervisorId]);
  }
  redirectToBranch(){
    const supervisorId = this.route.snapshot.params['id'];
    this.service.getSupervisorById(supervisorId).subscribe((res) => {
      this.userforredirect = res[0];
      this.router.navigate(['supervisor-panel/' + supervisorId + '/supervisor-branchprofile/' + this.userforredirect.branchId]);
      const currenturl = this.router.url;
      localStorage.setItem('previousUrl', currenturl);
    });
  }
  onLogout(){
    this.router.navigate(['welcome']);
    localStorage.clear();
  }
  onMessagesClick(){
    this.snackBar.open('Messages not added yet', 'Close', {
      duration: 3000,
      panelClass: 'error-snackbar',
    });
  }
  onTaskBoardClick(){
    this.snackBar.open('TaskBoard Not Added Yet', 'Close', {
      duration: 3000,
      panelClass: 'error-snackbar',
    });
  }
}
