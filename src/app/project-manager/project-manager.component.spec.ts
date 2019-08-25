import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MaterialModule} from '../material/material.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableDataSource,MatSlideToggleChange,MatPaginator,MAT_DIALOG_DATA} from '@angular/material';
import {Injectable} from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatDialogModule , MatDialog,MatDialogRef} from '@angular/material/dialog';
import {FilterPipe} from '../FilterPipe';
import { ProjectManagerComponent } from './project-manager.component';

describe('ProjectManagerComponent', () => {
  let component: ProjectManagerComponent;
  let fixture: ComponentFixture<ProjectManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectManagerComponent,FilterPipe ],
      imports:[MaterialModule,ReactiveFormsModule,FormsModule,HttpClientModule,BrowserAnimationsModule]
        })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
