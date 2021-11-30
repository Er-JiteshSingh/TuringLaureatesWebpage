import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddLaureateComponent} from './components/add-laureate/add-laureate.component';
import {AlanTuringComponent} from './components/alan-turing/alan-turing.component';
import {HomeComponent} from './components/home/home.component';
import {TuringAwardeesComponent} from './components/turing-awardees/turing-awardees.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent,
    pathMatch: "full"
  },
  {
    path: "alan",
    component: AlanTuringComponent,
    pathMatch: "full"
  },
  {
    path: "awardee",
    component: TuringAwardeesComponent,
    pathMatch: "full"
  },

  {
    path: "create",
    component: AddLaureateComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
