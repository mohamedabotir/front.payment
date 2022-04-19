import { DonationComponent } from './donation/donation.component';
import { PaypaleComponent } from './paypale/paypale.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:"donation/:id/:id2",component:PaypaleComponent},
  {path:"pay",component:DonationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
