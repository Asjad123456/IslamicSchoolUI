import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/Models/students';
import { AdminService } from 'src/Services/admin.service';

@Component({
  selector: 'app-admin-studentprofile',
  templateUrl: './admin-studentprofile.component.html',
  styleUrls: ['./admin-studentprofile.component.css']
})
export class AdminStudentprofileComponent {
  student: Student[];

  constructor(private service:AdminService, private route: ActivatedRoute, private router: Router){}

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
  onBack(){
    this.router.navigate(['admin-studentlist']);
  }
  logout(){
    this.router.navigate(['welcome']);
    localStorage.clear();
  }
  ToAdminPanel(){
    const adminId = localStorage.getItem('loggedInUserId');
    this.router.navigate(['admin-panel/' + adminId]);
  }
}
