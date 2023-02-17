import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/Services/account.service';

@Component({
  selector: 'app-waiting',
  templateUrl: './waiting.component.html',
  styleUrls: ['./waiting.component.css']
})
export class WaitingComponent {

  constructor(private router: Router, private service: AccountService){}

  onLogout(){
    this.service.logout();
  }
}
