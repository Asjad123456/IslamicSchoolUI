import { animate, style, transition, trigger } from '@angular/animations';
import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Branches } from 'src/Models/branches';
import { StudyClass } from 'src/Models/StudyClass';
import { User } from 'src/Models/user';
import { SupervisorService } from 'src/Services/supervisor.service';

@Component({
  selector: 'app-supervisor-branch-classlist',
  templateUrl: './supervisor-branch-classlist.component.html',
  styleUrls: ['./supervisor-branch-classlist.component.css'],
  animations: [
    trigger('timepickerDone', [
      transition(':leave', [
        animate('150ms ease-in', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class SupervisorBranchClasslistComponent {
  branch: Branches[];
  branchforid: Branches;
  user: User[];
  teacher: User[];
  studyclass: StudyClass;
  addClassForm: FormGroup;
  enteredSearchValue: string = '';
  searchText: string = '';
  classcount: number;

  constructor(private route: ActivatedRoute, private service: SupervisorService, private router: Router){}

  branchId = +this.route.snapshot.params['id'];

  ngOnInit(): void{
    this.addClassForm = new FormGroup({
      className: new FormControl('', Validators.required),
      classTime: new FormControl('', Validators.required),
      branchId: new FormControl(this.route.snapshot.params['id'], Validators.required),
      AppUserId: new FormControl('', Validators.required)
    });
    console.log(+this.route.snapshot.params['id']);
    this.getClassCount();
    this.getbranchdetails();
    this.getTeachersList();
  }
  toClassProfile(id:number){
    this.service.getClassById(id).subscribe(
      (response) =>{
        this.studyclass = response[0];
        this.router.navigate(['supervisor-panel/supervisor-branchprofile/'+ this.branchId + '/classprofile/' + id]);
      }
    );
  }
  getbranchdetails(){
    const id = +this.route.snapshot.params['id'];
    this.service.getBranchById(id).subscribe((res) =>{
      this.branch = res;
      console.log(res);
    })
  }
  getTeachersList(){
    this.service.getTeachersforlist().subscribe((res) =>{
      console.log(res);
      this.teacher = res;
    })
  }
  deleteClass(id: number){
    this.service.deleteClass(id)
    .subscribe(
      response =>{
        this.getbranchdetails();
        this.getTeachersList();
      },error =>{
        console.error(error)
      }
    )
  }
  addClass(){
    this.service.addClass(this.addClassForm.value).subscribe((res) =>{
      console.log(res);
    })
  }
  onSearchTextChanged(){
    this.searchText = this.enteredSearchValue.toLowerCase();
    console.log(this.searchText)
  }
  getClassCount(){
    const branchID = +this.route.snapshot.params['id'];
    this.service.gwtStudyClassCountForBranch(branchID).subscribe((res) =>{
      this.classcount = res;
    })
  }
  onback(){
    const supervisorId = localStorage.getItem('supervisorId');
    const branchId = +this.route.snapshot.params['id'];
    this.router.navigate(['supervisor-panel/'+ supervisorId+'/supervisor-branchprofile/' + branchId]);
  }
}
