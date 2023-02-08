import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from 'src/guards/role.guard';
import { AdminBranchClasslistComponent } from './Admin/admin-branch-classlist/admin-branch-classlist.component';
import { AdminBranchClassprofileComponent } from './Admin/admin-branch-classprofile/admin-branch-classprofile.component';
import { AdminBranchTeacherlistComponent } from './Admin/admin-branch-teacherlist/admin-branch-teacherlist.component';
import { AdminBrancheslistComponent } from './Admin/admin-brancheslist/admin-brancheslist.component';
import { AdminBranchprofileComponent } from './Admin/admin-branchprofile/admin-branchprofile.component';
import { AdminPanelComponent } from './Admin/admin-panel/admin-panel.component';
import { RoleManagmentComponent } from './Admin/role-managment/role-managment.component';
import { SignupComponent } from './signup/signup.component';
import { SupervisorPanelComponent } from './supervisor/supervisor-panel/supervisor-panel.component';
import { TeacherPanelComponent } from './teacher/teacher-panel/teacher-panel.component';
import { WaitingComponent } from './waiting/waiting.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'welcome', component:WelcomeComponent},
  // {path:'',redirectTo:'welcome',pathMatch:'full'},
  {path:'signup', component:SignupComponent},
  {path:'waiting',component:WaitingComponent},
  //Admin Routes
  {path:'admin-panel',component:AdminPanelComponent, canActivate:[RoleGuard]},
  {path:'role-managment', component:RoleManagmentComponent},
  {path:'admin-brancheslist', component:AdminBrancheslistComponent},
  {path:'admin-branchprofile/:id',component:AdminBranchprofileComponent},
  {path:'admin-branchprofile/:id/teachers-list',component:AdminBranchTeacherlistComponent},
  {path:'admin-branchprofile/:id/class-list',component:AdminBranchClasslistComponent},
  {path:'admin-branchprofile/:id/class-list/class-profile/:id',component:AdminBranchClassprofileComponent},
  //Supervisor Routes
  {path:'supervisor-panel', component:SupervisorPanelComponent, canActivate:[RoleGuard]},
  {path:'teacher-panel', component:TeacherPanelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
