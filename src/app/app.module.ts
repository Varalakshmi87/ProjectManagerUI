import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { ParenttaskSearchComponent } from './parenttask-search/parenttask-search.component';
import { UserManagerComponent } from './user-manager/user-manager.component';
import { ProjectSearchComponent } from './project-search/project-search.component';
import { TaskManagerHomeComponent } from './task-manager-home/task-manager-home.component';
import { ProjectManagerComponent } from './project-manager/project-manager.component';
import { AppRoutingModule } from './app-routing.module';
import {MaterialModule} from './material/material.module';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {FilterPipe} from './FilterPipe'; 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TaskServiceService} from './task-service.service';
import {UserServiceService} from './user-service.service';
import {ProjectServiceService} from './project-service.service';
@NgModule({
  declarations: [
    AppComponent,
    UserSearchComponent,
        ParenttaskSearchComponent,
        UserManagerComponent,
    ProjectSearchComponent,
    TaskManagerHomeComponent,
    ProjectManagerComponent,
    FilterPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    NgbModal,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [TaskServiceService,ProjectServiceService,UserServiceService],
  bootstrap: [AppComponent],
  entryComponents: [UserSearchComponent,ParenttaskSearchComponent,ProjectSearchComponent]
})
export class AppModule { }
