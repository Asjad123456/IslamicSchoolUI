import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { SupervisorBranchClassStudentlistComponent } from './supervisor/supervisor-branch-class-studentlist/supervisor-branch-class-studentlist.component';
import { SupervisorBranchTeacherslistComponent } from './supervisor/supervisor-branch-teacherslist/supervisor-branch-teacherslist.component';
import { AdminTeacherClassprofileComponent } from './Admin/teachers/admin-teacher-classprofile/admin-teacher-classprofile.component';
import { TeacherClassStudentlistComponent } from './teacher/teacher-class-studentlist/teacher-class-studentlist.component';
import { AdminSupervisorBranchprofileComponent } from './Admin/Supervisor/admin-supervisor-branchprofile/admin-supervisor-branchprofile.component';
import { DeanGuard } from 'src/guards/dean.guard';
import { AdminGuard } from 'src/guards/admin.guard';
import { TeacherGuard } from 'src/guards/teacher.guard';
import { TeacherClassAttendancelistComponent } from './teacher/teacher-class-attendancelist/teacher-class-attendancelist.component';
import { TeacherClassMarkattendanceComponent } from './teacher/teacher-class-markattendance/teacher-class-markattendance.component';
import { AdminBranchClassattendanceComponent } from './Admin/Branch/admin-branch-classattendance/admin-branch-classattendance.component';

const routes: Routes = [
  {path:'welcome', component:WelcomeComponent},                     //90% Done
  // {path:'search', component:SearchComponent},
  // {path:'',redirectTo:'welcome',pathMatch:'full'},
  {path:'signup', component:SignupComponent},                          //90% Done
  {path:'waiting',component:WaitingComponent},                         //90% Done
  //Admin Routes
  {path:'admin-panel/:id',component:AdminPanelComponent,canActivate: [DeanGuard]},              //90% Done
  {path:'admin-profile/:id',component:AdminProfileComponent,canActivate: [DeanGuard]},          //90% Done
  {path:'admin/:id/role-managment', component:RoleManagmentComponent,canActivate: [DeanGuard]},           //90% Done
  {path:'admin-brancheslist', component:AdminBrancheslistComponent,canActivate: [DeanGuard]},   //95% Done
  {path:'admin-branchprofile/:id',component:AdminBranchprofileComponent,canActivate: [DeanGuard]},  //99% Done
  {path:'admin-branchprofile/:id/teachers-list',component:AdminBranchTeacherlistComponent,canActivate: [DeanGuard]}, //Copy/paste
  {path:'admin-branchprofile/:id/teacher-profile/:id',component:AdminBranchTeacherprofileComponent,canActivate: [DeanGuard]},//work in progress
  {path:'admin-branchprofile/teacher-profile/class-profile/:id', component:AdminTeacherClassprofileComponent,canActivate: [DeanGuard]},
  {path:'admin-branchprofile/teacher-profile/:id/class-profile/:id',component:AdminBranchClassprofileComponent,canActivate: [DeanGuard]},
  {path:'admin-branchprofile/teacher-profile/class-profile/:id/attendance',component:AdminBranchClassattendanceComponent,canActivate: [DeanGuard]},//Full incomplete
  {path:'admin-branchprofile/:id/class-list',component:AdminBranchClasslistComponent,canActivate: [DeanGuard]},       //work in progress
  {path:'admin-branchprofile/:id/class-list/class-profile/:id',component:AdminBranchClassprofileComponent,canActivate: [DeanGuard]},     //Full incomplete
  {path:'admin-branchprofile/class-list/class-profile/:id/student-list',component:AdminBranchClassStudentlistComponent,canActivate: [DeanGuard]}, //Copy/paste
  {path:'admin-branchprofile/class-list/clasprofile/student-profile/:id',component:AdminBranchClassStudentprofileComponent,canActivate: [DeanGuard]},   //work in progress

  {path:'admin-supervisorlist', component:AdminSupervisorlistComponent,canActivate: [DeanGuard]},//work in progress
  {path:'admin-supervisorprofile/:id', component:AdminSupervisorprofileComponent,canActivate: [DeanGuard]},//work in progress
  {path:'admin-supervisor-branchprofile/:id', component:AdminSupervisorBranchprofileComponent,canActivate: [DeanGuard]},

  {path:'admin-studentlist', component:AdminStudentlistComponent,canActivate: [DeanGuard]},//Copy/paste
  {path:'admin-studentlist/admin-studentprofile/:id', component:AdminStudentprofileComponent,canActivate: [DeanGuard]},//work in progress

  {path:'admin/:id/admin-teacherslist', component:AdminTeacherslistComponent,canActivate: [DeanGuard]},//work in progress
  {path:'admin-teacherslist/admin-teacherprofile/:id', component:AdminTeacherprofileComponent,canActivate: [DeanGuard]},//work in progress
  {path:'class-profile/:id', component:AdminTeacherClassprofileComponent,canActivate: [DeanGuard]},//work in progress

  //Supervisor Routes
  {path:'supervisor-panel/:id', component:SupervisorPanelComponent,canActivate: [AdminGuard]},//90% Done
  {path:'supervisor-profile/:id', component:SupervisorProfileComponent,canActivate: [AdminGuard]},//80% Done
  {path:'supervisor-panel/:id/supervisor-branchprofile/:id', component:SupervisorBranchprofileComponent,canActivate: [AdminGuard]},//80% Done
  {path:'supervisor-panel/supervisor-branchprofile/:id/teacherlist', component:SupervisorBranchTeacherslistComponent,canActivate: [AdminGuard]},//work in progress
  {path:'supervisor-panel/supervisor-branchprofile/:id/teacher-profile/:id', component:SupervisorBranchTeacherprofileComponent,canActivate: [AdminGuard]},//work in progress
  {path:'supervisor-panel/supervisor-branchprofile/:id/classlist', component:SupervisorBranchClasslistComponent,canActivate: [AdminGuard]},//work in progress
  {path:'supervisor-panel/supervisor-branchprofile/:id/classprofile/:id', component:SupervisorBranchClassprofileComponent,canActivate: [AdminGuard]},//work in progress
  {path:'supervisor-panel/supervisor-branchprofile/classprofile/:id/studentlist', component:SupervisorBranchClassStudentlistComponent,canActivate: [AdminGuard]},
  {path:'supervisor-panel/supervisor-branchprofile/classprofile/:id/student-profile/:id', component:SupervisorBranchClassStudentprofileComponent,canActivate: [AdminGuard]},//work in progress
  {path:'supervisor-panel/supervisor-branchprofile/:id/studentlist', component:SupervisorBranchStudentlistComponent,canActivate: [AdminGuard]},//work in progress
  {path:'supervisor-panel/supervisor-branchprofile/:id/studentlist/studentprofile/:id', component:SupervisorBranchStudentprofileComponent,canActivate: [AdminGuard]}, //work in progress

  //teacher Routes
  {path:'teacher-panel/:id', component:TeacherPanelComponent,canActivate: [TeacherGuard]},//90% Done
  {path:'teacher-profile/:id', component:TeacherProfileComponent,canActivate: [TeacherGuard]},//work in progress
  {path:'teacher-panel/:id/classlist', component:TeacherClasslistComponent,canActivate: [TeacherGuard]},//work in progress
  {path:'teacher-panel/:id/classlist/classprofile/:id', component:TeacherClassprofileComponent,canActivate: [TeacherGuard]},//work in progress
  {path:'teacher-panel/classlist/classprofile/:id/attendancelist', component:TeacherClassAttendancelistComponent},
  {path:'teacher-panel/classlist/classprofile/:id/markattendance', component:TeacherClassMarkattendanceComponent},
  {path:'teacher-panel/classlist/classprofile/:id/studentlist', component:TeacherClassStudentlistComponent,canActivate: [TeacherGuard]},
  {path:'teacher-panel/classlist/classprofile/:id/studentprofile/:id', component:TeacherClassStudentprofileComponent,canActivate: [TeacherGuard]},//work in progress
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
