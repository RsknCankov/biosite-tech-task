import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserViewComponent } from './user-view/user-view.component';



@NgModule({
  declarations: [UserListComponent, UserViewComponent],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
