import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './components/demo/demo.component';

const routes: Routes = [
  { path: '', component: DemoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
