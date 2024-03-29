import { Component, EventEmitter, NgIterable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Branches } from 'src/Models/branches';
import { AdminService } from 'src/Services/admin.service';

@Component({
  selector: 'app-admin-branch-classlist',
  templateUrl: './admin-branch-classlist.component.html',
  styleUrls: ['./admin-branch-classlist.component.css']
})
export class AdminBranchClasslistComponent {
  branch: Branches[];
  studyClassCount: number;
  enteredSearchValue: string = '';
  searchText: string = '';
  showSearch = false;
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor(private router: Router, private service:AdminService, private route: ActivatedRoute){}
  branchid = +this.route.snapshot.params['id'];

  ngOnInit(): void{
    this.getBranchDetails();
    localStorage.setItem('branchID', JSON.stringify(this.branchid));
    this.classcount();
  }
  getBranchDetails = () => {
    const id =+this.route.snapshot.params['id'];
    this.service.getBranchdetailsforclasslist(id).subscribe((res) =>{
      this.branch = res;
      console.log(res);
    })
  }
  toClassProfile(id:number){
        this.router.navigate(['admin-branchprofile/' + this.branchid + '/class-list/class-profile/'+ id])
        const branchId = +this.route.snapshot.params['id'];
        localStorage.setItem('branchId', branchId.toString());
  }
  classcount(){
    this.service.gwtStudyClassCountForBranch(this.branchid).subscribe((res) =>{
      this.studyClassCount = res;
    })
  }
  onSearchTextChanged(){
    this.searchText = this.enteredSearchValue.toLowerCase();
    console.log(this.searchText)
  }
  onBack(){
    const lastRoute = localStorage.getItem('lastRoute');
    this.router.navigateByUrl(lastRoute);
    localStorage.removeItem('lastRoute');
  }
  logout(){
    this.router.navigate(['welcome']);
    localStorage.clear();
  }
  ToAdminPanel(){
    const adminId = localStorage.getItem('loggedInUserId');
    this.router.navigate(['admin-panel/' + adminId]);
  }
}
