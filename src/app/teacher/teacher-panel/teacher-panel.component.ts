import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/Models/user';
import { TeacherService } from 'src/Services/teacher.service';

@Component({
  selector: 'app-teacher-panel',
  templateUrl: './teacher-panel.component.html',
  styleUrls: ['./teacher-panel.component.css']
})
export class TeacherPanelComponent {
  teacher: User[];

  constructor(private route: ActivatedRoute, private service: TeacherService, private router: Router, private snackBar: MatSnackBar){}

  ngOnInit(): void{
    console.warn(this.route.snapshot.params['id']);
    this.getTeacherData()
  }
  getTeacherData(){
    const teacherId = this.route.snapshot.params['id']
    this.service.getTeacherById(teacherId).subscribe((res) =>{
      this.teacher = res;
      console.log(res);
    })
  }
  toclassesList(){
    const teacherid = this.route.snapshot.params['id'];
    this.router.navigate(['teacher-panel/'+teacherid+'/classlist']);
  }
  toteacherprofile(){
    const teacherId = this.route.snapshot.params['id'];
    this.router.navigate(['teacher-profile/' + teacherId]);
  }
  Logout(){
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
