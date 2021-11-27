import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllanTuringComponent } from './components/allan-turing/allan-turing.component';
import { HomeComponent } from './components/home/home.component';
import { TuringAwardeesComponent } from './components/turing-awardees/turing-awardees.component';

const routes: Routes = [
  {
    path:"home",
    component:HomeComponent,
    pathMatch:"full"
  },
  {
    path:"allen",
    component:AllanTuringComponent,
    pathMatch:"full"
  },
  {
    path:"awardee",
    component:TuringAwardeesComponent,
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
