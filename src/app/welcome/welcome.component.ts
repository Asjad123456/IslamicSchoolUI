import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RoleGuard } from 'src/guards/role.guard';
import { User } from 'src/Models/user';
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
  user!: UserForLogin;
  errorMessage!: string;

  constructor(private accountsService: AccountService, private roleGuard: RoleGuard,
    private route: ActivatedRoute, private router: Router) { }
  model: any = {};

  ngOnInit(): void {
    localStorage.setItem('user', 'hello');
  }
  onLogin() {
    this.accountsService.login(this.model).subscribe((res)=>{
      console.log(res);
      if (window.localStorage) {
        console.log('local storage supported !!!');
      } else {
        console.log('local storage not supported  $$$ ');
      }
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
