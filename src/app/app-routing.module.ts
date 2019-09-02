import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonDemoComponent } from './components/button-demo/button-demo.component';
import { InputTextareaDemoComponent } from './components/input-textarea-demo/input-textarea-demo.component';
import { OverlayDemoComponent } from './components/overlay-demo/overlay-demo.component';
import { TabsDemoComponent } from './components/tabs-demo/tabs-demo.component';
import { TooltipDemoComponent } from './components/tooltip-demo/tooltip-demo.component';
import { ButtonToggleDemoComponent } from './components/button-toggle-demo/button-toggle-demo.component';
import { CollapseDemoComponent } from './components/collapse-demo/collapse-demo.component';
import { BadgeDemoComponent } from './components/badge-demo/badge-demo.component';
import { TableDemoComponent } from './components/table-demo/table-demo.component';

const routes: Routes = [
  { path: 'buttons', component: ButtonDemoComponent },
  { path: 'buttonToggle', component: ButtonToggleDemoComponent },
  { path: 'inputs', component: InputTextareaDemoComponent },
  { path: 'overlay', component: OverlayDemoComponent },
  { path: 'tabs', component: TabsDemoComponent },
  { path: 'tooltip', component: TooltipDemoComponent },
  { path: 'expansionPanel', component: CollapseDemoComponent },
  { path: 'badge', component: BadgeDemoComponent },
  { path: 'table', component: TableDemoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
