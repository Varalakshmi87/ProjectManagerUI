import { Component, OnInit, Inject, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSlideToggleChange, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import { ProjectServiceService } from '../project-service.service';
import { User } from '../User';
import { Project } from '../Project';
import { UserDialogData } from '../UserDialogData';
import { UserSearchComponent } from '../user-search/user-search.component';


@Component({
  selector: 'app-project-manager',
  templateUrl: './project-manager.component.html',
  styleUrls: ['./project-manager.component.css']
})
export class ProjectManagerComponent implements OnInit {

  constructor(private projectService: ProjectServiceService, private userService: UserServiceService,
    public dialog: MatDialog) {

  }

  creatingProjectForm: Project;
  projectDataSource: Project[] = [];
  projectSearchValue: string;
  projectSortElement: string;
  disabled: boolean = false;
  dialogDataSelected: User;
  SelectedManagerName: string;
  isProjectEndDateLess: boolean = false;
  
  projStartDateSort: boolean = true;
  projEndDateSort: boolean = true;
  projPrioritySort: boolean = true;
  projCompletedSort: boolean = true;


  ngOnInit() {
    console.log("ngOnInit");
    this.creatingProjectForm = new Project();
    this.creatingProjectForm.IsCreate = true;
    this.projectService.getprojects().subscribe(a => this.projectDataSource = a);
    this.projectSortElement = 'ProjectName';
    this.disabled = false;
    console.log(this.projectDataSource);
  }

  cancelUpdateProject() {
    this.creatingProjectForm = new Project();
    this.creatingProjectForm.IsCreate = true;
    this.disabled = false;
  }
  onSetDateChange(event) {
    console.log(event.checked);
    if (event.checked) {
      console.log(new Date());
      console.log(new Date().setDate(new Date().getDate() + 1));
      //this.selectedStartDate = new Date();
      this.creatingProjectForm.StartDate = new Date();
      let enddate = new Date();
      enddate.setDate(enddate.getDate() + 1);
      this.creatingProjectForm.EndDate = enddate;
    }
    else {
      this.creatingProjectForm.StartDate = null;
      this.creatingProjectForm.EndDate = null;
    }
  }

  OnProjectFormSubmit(creatingProjectForm: NgForm) {
    console.log(creatingProjectForm.value);
    this.CompareDates();
    if (creatingProjectForm.valid && !this.isProjectEndDateLess) {
      this.isProjectEndDateLess = false;
      let localProject: Project = new Project();
      localProject = creatingProjectForm.value;

      if (localProject.Project_ID != undefined && localProject.Project_ID > 0) {
        this.projectService.updateprojects(creatingProjectForm.value, localProject.Project_ID).subscribe(g => this.projectService.getprojects().subscribe(a => this.projectDataSource = a));
        this.creatingProjectForm = new Project();
        this.creatingProjectForm.IsCreate = true;
        console.log("project updated");
        creatingProjectForm.resetForm();
        this.disabled = false;
      }
      else {
        this.projectService.addprojects(creatingProjectForm.value).subscribe(g => this.projectService.getprojects().subscribe(a => this.projectDataSource = a));
        this.creatingProjectForm = new Project();
        this.creatingProjectForm.IsCreate = true;
        console.log("project added");
        creatingProjectForm.resetForm();
        this.disabled = false;
      }
    }
  }

  sort(sortElement: string) {
    console.log('calling sort' + sortElement);
    this.projectSortElement = sortElement;
    if (sortElement == 'StartDate') {
      if (this.projStartDateSort) {
        this.projectDataSource = this.projectDataSource.sort((a, b) => this.getTime(a.StartDate) - this.getTime(b.StartDate));
      }
      else {
        this.projectDataSource = this.projectDataSource.sort((a, b) => this.getTime(a.StartDate) - this.getTime(b.StartDate)).reverse();
      }
      this.projStartDateSort = !this.projStartDateSort;
    }
    else if (sortElement == 'EndDate') {
      if (this.projEndDateSort) {
        this.projectDataSource = this.projectDataSource.sort((a, b) => this.getTime(a.EndDate) - this.getTime(b.EndDate));
      }
      else {
        this.projectDataSource = this.projectDataSource.sort((a, b) => this.getTime(a.EndDate) - this.getTime(b.EndDate)).reverse();
      }
      this.projEndDateSort = !this.projEndDateSort;

    }
    else if (sortElement == 'Priority') {
      if (this.projPrioritySort) {
        this.projectDataSource = this.projectDataSource.sort((a, b) => a.Priority - b.Priority);
      }
      else {
        this.projectDataSource = this.projectDataSource.sort((a, b) => a.Priority - b.Priority).reverse();
      }
      this.projPrioritySort = !this.projPrioritySort;
    }
    else {
      if (this.projCompletedSort) {
        this.projectDataSource = this.projectDataSource.sort((a, b) => a.CompletedTaskCount - b.CompletedTaskCount);
      }
      else {
        this.projectDataSource = this.projectDataSource.sort((a, b) => a.CompletedTaskCount - b.CompletedTaskCount).reverse();
      }
      this.projCompletedSort = !this.projCompletedSort;
    }
  }

  private getTime(date?: Date) {
    return date != null ? new Date(date).getTime() : 0;
  }

  editProject(project: Project, user: User) {
    // this.createUserForm = new User();
    console.log(user);
    let localProject: Project = new Project();
    localProject.Project_ID = project.Project_ID;
    localProject.IsCreate = false;
    localProject.EndDate = project.EndDate;
    localProject.StartDate = project.StartDate;
    localProject.Userid = project.Userid;
    localProject.Priority = project.Priority;
    localProject.ProjectName = project.ProjectName;
    if (user != undefined && user != null) {
      localProject.ManagerName = user.FirstName + " " + user.LastName;
      localProject.Userid = user.User_id;
    }
    if (localProject.StartDate != null && localProject.StartDate != undefined) {
      this.disabled = true;
    }
    console.log(localProject);
    this.creatingProjectForm = localProject;


  }

  CompareDates(): void {
    console.log(this.creatingProjectForm.StartDate);
    console.log(this.creatingProjectForm.EndDate);
    if (this.creatingProjectForm.StartDate != null && this.creatingProjectForm.EndDate != null) {
      if (new Date(this.creatingProjectForm.EndDate) < new Date(this.creatingProjectForm.StartDate)) {
        console.log('isEndDateLess');
        this.isProjectEndDateLess = true;
      }
      else
        this.isProjectEndDateLess = false;

    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UserSearchComponent, {
      width: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.dialogDataSelected = result;
      this.SelectedManagerName = this.dialogDataSelected.FirstName + " " + this.dialogDataSelected.LastName;
      this.creatingProjectForm.Userid = this.dialogDataSelected.User_id;
    });
  }
}
