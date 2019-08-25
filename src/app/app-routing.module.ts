import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { TaskManagerHomeComponent } from './task-manager-home/task-manager-home.component';

const routes:Routes = [
{
  path:'ProjectManager',component:TaskManagerHomeComponent
},
{
  path:'',redirectTo:'/ProjectManager',pathMatch:'full'
}
];

@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
