import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faBinoculars } from '@fortawesome/free-solid-svg-icons';
import { AdminPanelComponent } from './Admin/admin-panel/admin-panel.component';
import { RoleManagmentComponent } from './Admin/role-managment/role-managment.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RoleModalComponent } from './Admin/role-modal/role-modal.component';
import { AdminBrancheslistComponent } from './Admin/Branch/admin-brancheslist/admin-brancheslist.component';
import { WaitingComponent } from './waiting/waiting.component';
import { SupervisorPanelComponent } from './supervisor/supervisor-panel/supervisor-panel.component';
import { TeacherPanelComponent } from './teacher/teacher-panel/teacher-panel.component';
import { RoleGuard } from 'src/guards/role.guard';
import { SearchComponent } from './search/search.component';
import { AdminBranchprofileComponent } from './Admin/Branch/admin-branchprofile/admin-branchprofile.component';
import { AdminBranchClasslistComponent } from './Admin/Branch/admin-branch-classlist/admin-branch-classlist.component';
import { AdminBranchClassprofileComponent } from './Admin/Branch/admin-branch-classprofile/admin-branch-classprofile.component';
import { AdminBranchClassStudentlistComponent } from './Admin/Branch/admin-branch-class-studentlist/admin-branch-class-studentlist.component';
import { AdminBranchClassStudentprofileComponent } from './Admin/Branch/admin-branch-class-studentprofile/admin-branch-class-studentprofile.component';
import { AdminSupervisorlistComponent } from './Admin/Supervisor/admin-supervisorlist/admin-supervisorlist.component';
import { AdminSupervisorprofileComponent } from './Admin/Supervisor/admin-supervisorprofile/admin-supervisorprofile.component';
import { AdminStudentlistComponent } from './Admin/Student/admin-studentlist/admin-studentlist.component';
import { AdminStudentprofileComponent } from './Admin/Student/admin-studentprofile/admin-studentprofile.component';
import { SupervisorProfileComponent } from './supervisor/supervisor-profile/supervisor-profile.component';
import { SupervisorBranchprofileComponent } from './supervisor/supervisor-branchprofile/supervisor-branchprofile.component';
import { SupervisorBranchClasslistComponent } from './supervisor/supervisor-branch-classlist/supervisor-branch-classlist.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SupervisorBranchClassprofileComponent } from './supervisor/supervisor-branch-classprofile/supervisor-branch-classprofile.component';
import { SupervisorBranchClassStudentprofileComponent } from './supervisor/supervisor-branch-class-studentprofile/supervisor-branch-class-studentprofile.component';
import { SupervisorBranchStudentlistComponent } from './supervisor/supervisor-branch-studentlist/supervisor-branch-studentlist.component';
import { SupervisorBranchStudentprofileComponent } from './supervisor/supervisor-branch-studentprofile/supervisor-branch-studentprofile.component';
import { TeacherProfileComponent } from './teacher/teacher-profile/teacher-profile.component';
import { TeacherClasslistComponent } from './teacher/teacher-classlist/teacher-classlist.component';
import { TeacherClassprofileComponent } from './teacher/teacher-classprofile/teacher-classprofile.component';
import { TeacherClassStudentprofileComponent } from './teacher/teacher-class-studentprofile/teacher-class-studentprofile.component';
import { AdminBranchTeacherlistComponent } from './Admin/Branch/admin-branch-teacherlist/admin-branch-teacherlist.component';
import { AdminBranchTeacherprofileComponent } from './Admin/Branch/admin-branch-teacherprofile/admin-branch-teacherprofile.component';
import { SupervisorBranchTeacherslistComponent } from './supervisor/supervisor-branch-teacherslist/supervisor-branch-teacherslist.component';
import { SupervisorBranchTeacherprofileComponent } from './supervisor/supervisor-branch-teacherprofile/supervisor-branch-teacherprofile.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AdminProfileComponent } from './Admin/admin-profile/admin-profile.component';
import { AdminTeacherslistComponent } from './Admin/teachers/admin-teacherslist/admin-teacherslist.component';
import { AdminTeacherprofileComponent } from './Admin/teachers/admin-teacherprofile/admin-teacherprofile.component';
import { AdminTeacherClassprofileComponent } from './Admin/teachers/admin-teacher-classprofile/admin-teacher-classprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SignupComponent,
    AdminPanelComponent,
    RoleManagmentComponent,
    RoleModalComponent,
    AdminBrancheslistComponent,
    WaitingComponent,
    SupervisorPanelComponent,
    TeacherPanelComponent,
    SearchComponent,
    AdminBranchprofileComponent,
    AdminBranchClasslistComponent,
    AdminBranchClassprofileComponent,
    AdminBranchClassStudentlistComponent,
    AdminBranchClassStudentprofileComponent,
    AdminSupervisorlistComponent,
    AdminSupervisorprofileComponent,
    AdminStudentlistComponent,
    AdminStudentprofileComponent,
    SupervisorProfileComponent,
    SupervisorBranchprofileComponent,
    SupervisorBranchClasslistComponent,
    SupervisorBranchClassprofileComponent,
    SupervisorBranchClassStudentprofileComponent,
    SupervisorBranchStudentlistComponent,
    SupervisorBranchStudentprofileComponent,
    TeacherProfileComponent,
    TeacherClasslistComponent,
    TeacherClassprofileComponent,
    TeacherClassStudentprofileComponent,
    AdminBranchTeacherlistComponent,
    AdminBranchTeacherprofileComponent,
    SupervisorBranchTeacherslistComponent,
    SupervisorBranchTeacherprofileComponent,
    AdminProfileComponent,
    AdminTeacherslistComponent,
    AdminTeacherprofileComponent,
    AdminTeacherClassprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgxMaterialTimepickerModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    ModalModule.forRoot()
  ],
  providers: [
    { provide: FaIconLibrary, useValue: faBinoculars },
    RoleGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
