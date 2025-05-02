import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NotificationComponent } from './notification/notification.component';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';
import { MessageComponent } from './message/message.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'notification', component: NotificationComponent },
  { path: 'search', component: SearchComponent },
  { path: 'profile', component: ProfileComponent }, 
  { path: 'message', component: MessageComponent }, 
  { path: 'chat', component: MessageComponent },
  { path: 'comment-section', component: HomepageComponent},
  { path: '**', redirectTo: '/login' }, 
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
