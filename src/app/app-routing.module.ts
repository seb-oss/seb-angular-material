import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  DialogDemoComponent,
  ButtonDemoComponent,
  ButtonToggleDemoComponent,
  InputTextareaDemoComponent,
  OverlayDemoComponent,
  TabsDemoComponent,
  TooltipDemoComponent,
  CollapseDemoComponent,
  BadgeDemoComponent,
  TableDemoComponent
} from './components';

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
  { path: 'dialog', component: DialogDemoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
