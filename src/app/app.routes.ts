import { Routes } from '@angular/router';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserViewComponent } from './pages/user-view/user-view.component';

export const routes: Routes = [
    {path:"", pathMatch:"full", redirectTo:'home'},
    {path:'home', component: UserListComponent, children:[
        {path:"", component:UserListComponent},
        {path:"user/:id", component:UserViewComponent}
    ]},
    {path:"**", redirectTo:"home"}
];
