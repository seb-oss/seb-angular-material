import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { MarkdownViewerComponent } from './components/markdown-viewer/markdown-viewer.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';

import 'hammerjs';
import {
  BadgeDemoComponent,
  BottomSheetOverviewExampleSheetComponent,
  ButtonDemoComponent,
  ButtonToggleDemoComponent,
  CollapseDemoComponent,
  FooterComponent,
  HeaderComponent,
  InputTextareaDemoComponent,
  OverlayDemoComponent,
  TableDemoComponent,
  TabsDemoComponent,
  TooltipDemoComponent,
} from './components';


@NgModule({
  declarations: [
    AppComponent,
    BadgeDemoComponent,
    BottomSheetOverviewExampleSheetComponent,
    ButtonDemoComponent,
    ButtonToggleDemoComponent,
    CollapseDemoComponent,
    FooterComponent,
    HeaderComponent,
    InputTextareaDemoComponent,
    MarkdownViewerComponent,
    OverlayDemoComponent,
    TableDemoComponent,
    TabsDemoComponent,
    TooltipDemoComponent,
  ],
  entryComponents: [
    BottomSheetOverviewExampleSheetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    iconReg: MatIconRegistry,
  ) {
    iconReg.setDefaultFontSetClass('fa');
  }
}
