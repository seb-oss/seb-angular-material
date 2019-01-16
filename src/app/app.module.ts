import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { DemoComponent } from './components/demo/demo.component';
import { MarkdownViewerComponent } from './components/markdown-viewer/markdown-viewer.component';
import { HttpClientModule } from '@angular/common/http';
import { TooltipDemoComponent } from './components/tooltip-demo/tooltip-demo.component';
import { TabsDemoComponent } from './components/tabs-demo/tabs-demo.component';
import { InputTextareaDemoComponent } from './components/input-textarea-demo/input-textarea-demo.component';
import { SnackbarDemoComponent } from './components/snackbar-demo/snackbar-demo.component';
import { CollapseDemoComponent } from './components/collapse-demo/collapse-demo.component';
import { ButtonDemoComponent } from './components/button-demo/button-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    DemoComponent,
    MarkdownViewerComponent,
    TooltipDemoComponent,
    TabsDemoComponent,
    InputTextareaDemoComponent,
    SnackbarDemoComponent,
    CollapseDemoComponent,
    ButtonDemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
