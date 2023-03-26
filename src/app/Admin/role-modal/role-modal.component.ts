import { Component, EventEmitter, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { User } from 'src/Models/user';


@Component({
  selector: 'app-role-modal',
  templateUrl: './role-modal.component.html',
  styleUrls: ['./role-modal.component.css']
})
export class RoleModalComponent {
  @Input() updateSelectedRoles = new EventEmitter();
  user!: User;
  roles!: any[];

  constructor(public bsModalRef: BsModalRef, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  updateRoles(){
    const updatedRoles = this.roles.filter(role => role.checked).map(role => role.name);
    this.updateSelectedRoles.emit(updatedRoles);
    this.bsModalRef.hide();
    this.snackBar.open('Roles Changed!', 'Close', {
      duration: 3000,
      panelClass: 'success-snackbar'
    });
  }
  
  uncheckAllExcept(event: any, selectedRole: any) {
    event.stopPropagation();
  
    // Uncheck all roles except the selected role
    this.roles.forEach(role => {
      if (role.name !== selectedRole.name) {
        role.checked = false;
      }
    });
  
    // Update the selected role
    selectedRole.checked = true;
  }
  
  
}
