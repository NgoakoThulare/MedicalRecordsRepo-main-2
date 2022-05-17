import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import {Routes} from '@angular/router';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  {  
    path: '',
    canActivate: [AuthGuard],
    children: [
      { path: 'about', component: AboutComponent, resolve: {}},
      { path: 'help', component: HelpComponent, resolve: {}}
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full'},
];

