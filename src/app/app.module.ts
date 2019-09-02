import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MarkdownViewerComponent } from './components/markdown-viewer/markdown-viewer.component';
import { HttpClientModule } from '@angular/common/http';
import { TooltipDemoComponent } from './components/tooltip-demo/tooltip-demo.component';
import { TabsDemoComponent } from './components/tabs-demo/tabs-demo.component';
import { InputTextareaDemoComponent } from './components/input-textarea-demo/input-textarea-demo.component';
import { OverlayDemoComponent, BottomSheetOverviewExampleSheetComponent } from './components/overlay-demo/overlay-demo.component';
import { CollapseDemoComponent } from './components/collapse-demo/collapse-demo.component';
import { ButtonDemoComponent } from './components/button-demo/button-demo.component';
import { ButtonToggleDemoComponent } from './components/button-toggle-demo/button-toggle-demo.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BadgeDemoComponent } from './components/badge-demo/badge-demo.component';
import { MatIconRegistry } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MarkdownViewerComponent,
    TooltipDemoComponent,
    TabsDemoComponent,
    InputTextareaDemoComponent,
    OverlayDemoComponent,
    CollapseDemoComponent,
    ButtonDemoComponent,
    ButtonToggleDemoComponent,
    BadgeDemoComponent,
    BottomSheetOverviewExampleSheetComponent,
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
