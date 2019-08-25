import { Component, OnInit, Inject, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSlideToggleChange, MatPaginator, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ProjectServiceService } from '../project-service.service';
import { ProjectDialogData } from '../ProjectDialogData';
import {Project} from '../Project';
@Component({
  selector: 'app-project-search',
  templateUrl: './project-search.component.html',
  styleUrls: ['./project-search.component.css']
})
export class ProjectSearchComponent implements OnInit {

  constructor(private projectService: ProjectServiceService, public dialogRef: MatDialogRef<ProjectSearchComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProjectDialogData) { }
    displayedColumns = ['Project_Id', 'ProjectName', 'Action'];
    dataSourceProject: MatTableDataSource<Project>;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngOnInit() {
      this.projectService.getprojects().subscribe(a => this.setData(a));
    }
    applyFilter(filterValue: string) {
      this.dataSourceProject.filter = filterValue.trim().toLowerCase();
    }
    setData(data: any) {
      this.dataSourceProject = new MatTableDataSource(data);
      this.dataSourceProject.paginator = this.paginator;
    }
    onNoClick(): void {
      this.dialogRef.close();
    }

}
