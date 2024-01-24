import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { InterestsComponent } from './interests/interests.component';
import { SkillsComponent } from './skills/skills.component';
import { WorksComponent } from './works/works.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  {path: 'Home', component: HomeComponent},
  {path: 'About', component: AboutComponent},
  {path: 'Skills', component: SkillsComponent},
  {path: 'Works', component: WorksComponent},
  {path: 'Interests', component: InterestsComponent},
  {path: 'Contact', component: ContactComponent},
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
