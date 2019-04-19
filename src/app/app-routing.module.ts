import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonDemoComponent } from './components/button-demo/button-demo.component';
import { InputTextareaDemoComponent } from './components/input-textarea-demo/input-textarea-demo.component';
import { SnackbarDemoComponent } from './components/snackbar-demo/snackbar-demo.component';
import { TabsDemoComponent } from './components/tabs-demo/tabs-demo.component';
import { TooltipDemoComponent } from './components/tooltip-demo/tooltip-demo.component';
import { ButtonToggleDemoComponent } from './components/button-toggle-demo/button-toggle-demo.component';

const routes: Routes = [
  { path: 'buttons', component: ButtonDemoComponent },
  { path: 'buttonToggle', component: ButtonToggleDemoComponent },
  { path: 'inputs', component: InputTextareaDemoComponent },
  { path: 'snackbar', component: SnackbarDemoComponent },
  { path: 'tabs', component: TabsDemoComponent },
  { path: 'tooltip', component: TooltipDemoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
