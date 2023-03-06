import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router} from '@angular/router';
import { RoleGuard } from 'src/guards/role.guard';
import { UserForLogin } from 'src/Models/userforlogin';
import { AccountService } from 'src/Services/account.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  loginMode = false;
  registerMode = false;
  user: UserForLogin;
  errorMessage!: string;

  constructor(private accountsService: AccountService, private roleGuard: RoleGuard,
    private route: ActivatedRoute, private router: Router, private snackBar: MatSnackBar) { }
  model: any = {};

  ngOnInit(): void {
    localStorage.setItem('user', 'hello');
  }
  onLogin() {
    this.accountsService.login(this.model).subscribe((res)=>{
      console.log(res);
      this.user = res;
      if(this.user.roles.includes('DEAN')){
        this.router.navigate(['admin-panel/' + this.user.appUser.id])
      }else if(this.user.roles.includes('ADMIN')){
        this.router.navigate(['supervisor-panel/'+ this.user.appUser.id])
      }else if(this.user.roles.includes('TEACHER')){
        this.router.navigate(['teacher-panel/'+ this.user.appUser.id])
      }else if(this.user.roles.includes('NEWENTRY')){
        this.router.navigate(['waiting'])
      }
      this.snackBar.open('LoggedIn SuccessFully!', 'Close', {
        duration: 3000,
        panelClass: 'success-snackbar'
      });
      if (window.localStorage) {
        console.log('local storage supported !!!');
      } else {
        console.log('local storage not supported  $$$ ');
      }
    },error =>{
      this.snackBar.open('An error occurred, Try Again!', 'Close', {
        duration: 3000,
        panelClass: 'error-snackbar'
      });
    });
  }

  onLogout(){
    this.accountsService.logout();
    this.router.navigate(['/welcome']);
  }
  resetForm(loginForm: NgForm){
    loginForm.reset();
  }
  toSignup(){
    this.router.navigate(['signup'])
  }
}
