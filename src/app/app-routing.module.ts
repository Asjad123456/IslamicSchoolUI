import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from 'src/guards/role.guard';
import { AdminBranchClassStudentlistComponent } from './Admin/Branch/admin-branch-class-studentlist/admin-branch-class-studentlist.component';
import { AdminBranchClassStudentprofileComponent } from './Admin/Branch/admin-branch-class-studentprofile/admin-branch-class-studentprofile.component';
import { AdminBranchClasslistComponent } from './Admin/Branch/admin-branch-classlist/admin-branch-classlist.component';
import { AdminBranchClassprofileComponent } from './Admin/Branch/admin-branch-classprofile/admin-branch-classprofile.component';
import { AdminBranchTeacherlistComponent } from './Admin/Branch/admin-branch-teacherlist/admin-branch-teacherlist.component';
import { AdminBrancheslistComponent } from './Admin/Branch/admin-brancheslist/admin-brancheslist.component';
import { AdminBranchprofileComponent } from './Admin/Branch/admin-branchprofile/admin-branchprofile.component';
import { AdminPanelComponent } from './Admin/admin-panel/admin-panel.component';
import { RoleManagmentComponent } from './Admin/role-managment/role-managment.component';
import { SignupComponent } from './signup/signup.component';
import { SupervisorPanelComponent } from './supervisor/supervisor-panel/supervisor-panel.component';
import { TeacherPanelComponent } from './teacher/teacher-panel/teacher-panel.component';
import { WaitingComponent } from './waiting/waiting.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AdminSupervisorlistComponent } from './Admin/Supervisor/admin-supervisorlist/admin-supervisorlist.component';
import { AdminSupervisorprofileComponent } from './Admin/Supervisor/admin-supervisorprofile/admin-supervisorprofile.component';
import { AdminStudentlistComponent } from './Admin/Student/admin-studentlist/admin-studentlist.component';
import { AdminStudentprofileComponent } from './Admin/Student/admin-studentprofile/admin-studentprofile.component';
import { SupervisorProfileComponent } from './supervisor/supervisor-profile/supervisor-profile.component';
import { SupervisorBranchprofileComponent } from './supervisor/supervisor-branchprofile/supervisor-branchprofile.component';
import { SupervisorBranchClasslistComponent } from './supervisor/supervisor-branch-classlist/supervisor-branch-classlist.component';
import { SupervisorBranchClassprofileComponent } from './supervisor/supervisor-branch-classprofile/supervisor-branch-classprofile.component';
import { SupervisorBranchClassStudentprofileComponent } from './supervisor/supervisor-branch-class-studentprofile/supervisor-branch-class-studentprofile.component';
import { SupervisorBranchStudentlistComponent } from './supervisor/supervisor-branch-studentlist/supervisor-branch-studentlist.component';
import { SupervisorBranchStudentprofileComponent } from './supervisor/supervisor-branch-studentprofile/supervisor-branch-studentprofile.component';
import { TeacherProfileComponent } from './teacher/teacher-profile/teacher-profile.component';
import { TeacherClasslistComponent } from './teacher/teacher-classlist/teacher-classlist.component';
import { TeacherClassprofileComponent } from './teacher/teacher-classprofile/teacher-classprofile.component';
import { TeacherClassStudentprofileComponent } from './teacher/teacher-class-studentprofile/teacher-class-studentprofile.component';
import { AdminBranchTeacherprofileComponent } from './Admin/Branch/admin-branch-teacherprofile/admin-branch-teacherprofile.component';
import { SupervisorBranchTeacherprofileComponent } from './supervisor/supervisor-branch-teacherprofile/supervisor-branch-teacherprofile.component';
import { AdminProfileComponent } from './Admin/admin-profile/admin-profile.component';
import { AdminTeacherslistComponent } from './Admin/teachers/admin-teacherslist/admin-teacherslist.component';
import { AdminTeacherprofileComponent } from './Admin/teachers/admin-teacherprofile/admin-teacherprofile.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path:'welcome', component:WelcomeComponent},                     //90% Done
  {path:'search', component:SearchComponent},
  // {path:'',redirectTo:'welcome',pathMatch:'full'},
  {path:'signup', component:SignupComponent},                          //90% Done
  {path:'waiting',component:WaitingComponent},                         //90% Done
  //Admin Routes
  {path:'admin-panel/:id',component:AdminPanelComponent},              //90% Done
  {path:'admin-profile/:id',component:AdminProfileComponent},          //90% Done
  {path:'role-managment', component:RoleManagmentComponent},           //90% Done
  {path:'admin-brancheslist', component:AdminBrancheslistComponent},   //95% Done
  {path:'admin-branchprofile/:id',component:AdminBranchprofileComponent},  //99% Done
  {path:'admin-branchprofile/:id/teachers-list',component:AdminBranchTeacherlistComponent}, //Copy/paste
  {path:'admin-branchprofile/:id/teacher-profile/:id',component:AdminBranchTeacherprofileComponent},//work in progress
  {path:'admin-branchprofile/teacher-profile/:id/class-profile/:id',component:AdminBranchClassprofileComponent},//Full incomplete
  {path:'admin-branchprofile/:id/class-list',component:AdminBranchClasslistComponent},       //work in progress  
  {path:'admin-branchprofile/:id/class-list/class-profile/:id',component:AdminBranchClassprofileComponent},     //Full incomplete
  {path:'admin-branchprofile/:id/class-list/class-profile/:id/student-list',component:AdminBranchClassStudentlistComponent}, //Copy/paste
  {path:'admin-branchprofile/:id/class-list/class-profile/:id/student-list/:id',component:AdminBranchClassStudentprofileComponent},   //work in progress

  {path:'admin-supervisorlist', component:AdminSupervisorlistComponent},//work in progress
  {path:'admin-supervisorprofile/:id', component:AdminSupervisorprofileComponent},//work in progress

  {path:'admin-studentlist', component:AdminStudentlistComponent},//Copy/paste
  {path:'admin-studentlist/admin-studentprofile/:id', component:AdminStudentprofileComponent},//work in progress

  {path:'admin-teacherslist', component:AdminTeacherslistComponent},//work in progress
  {path:'admin-teacherslist/admin-teacherprofile/:id', component:AdminTeacherprofileComponent},//work in progress
  {path:'admin-teacherslist/admin-teacherprofile/class-profile/:id', component:AdminTeacherprofileComponent},//work in progress

  //Supervisor Routes
  {path:'supervisor-panel/:id', component:SupervisorPanelComponent},//90% Done
  {path:'supervisor-profile/:id', component:SupervisorProfileComponent},//80% Done
  {path:'supervisor-panel/:id/supervisor-branchprofile/:id', component:SupervisorBranchprofileComponent},//80% Done
  {path:'supervisor-panel/:id/supervisor-branchprofile/:id/teacherlist', component:SupervisorBranchClasslistComponent},//work in progress
  {path:'supervisor-panel/supervisor-branchprofile/:id/teacher-profile/:id', component:SupervisorBranchTeacherprofileComponent},//work in progress
  {path:'supervisor-panel/:id/supervisor-branchprofile/:id/classlist', component:SupervisorBranchClasslistComponent},//work in progress
  {path:'supervisor-panel/supervisor-branchprofile/:id/classprofile/:id', component:SupervisorBranchClassprofileComponent},//work in progress
  {path:'supervisor-panel/supervisor-branchprofile/classprofile/:id/student-profile/:id', component:SupervisorBranchClassStudentprofileComponent},//work in progress
  {path:'supervisor-panel/:id/supervisor-branchprofile/:id/studentlist', component:SupervisorBranchStudentlistComponent},//work in progress
  {path:'supervisor-panel/supervisor-branchprofile/:id/studentlist/studentprofile/:id', component:SupervisorBranchStudentprofileComponent}, //work in progress

  //teacher Routes
  {path:'teacher-panel/:id', component:TeacherPanelComponent},//90% Done
  {path:'teacher-profile/:id', component:TeacherProfileComponent},//work in progress
  {path:'teacher-panel/:id/classlist', component:TeacherClasslistComponent},//work in progress
  {path:'teacher-panel/:id/classlist/classprofile/:id', component:TeacherClassprofileComponent},//work in progress
  {path:'teacher-panel/classlist/classprofile/:id/studentprofile/:id', component:TeacherClassStudentprofileComponent},//work in progress
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
