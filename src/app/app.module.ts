import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgAnimatedBorderModule } from 'ng-animated-border';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProblemComponent } from './components/problem/problem.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { CodingComponent } from './components/coding/coding.component';
import { ToolsComponent } from './components/tools/tools.component';
import { ReferencesComponent } from './components/references/references.component';
import { VisualsComponent } from './components/visuals/visuals.component';
import { TwitterHandleComponent } from './components/shared/twitter-handle/twitter-handle.component';
import { TruncatePipe } from './directives/truncate-pipe';
import { AboutComponent } from './components/about/about.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgxTwitterWidgetsModule } from "ngx-twitter-widgets";
import { InvoiceQrCodeComponent } from './components/shared/invoice-qr-code/invoice-qr-code.component';
import { LnurlPayDialogComponent } from './components/shared/lnurl-pay-dialog/lnurl-pay-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { QRCodeModule } from 'angularx-qrcode';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { ThanksModalComponent } from './components/shared/thanks-modal/thanks-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    ProblemComponent,
    CodingComponent,
    ToolsComponent,
    ReferencesComponent,
    VisualsComponent,
    TwitterHandleComponent,


    TruncatePipe,

    InvoiceQrCodeComponent,
    LnurlPayDialogComponent,

    AboutComponent,
     ThanksModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    CommonModule,
    HttpClientModule,

    FormsModule,
    ReactiveFormsModule,

    MatDialogModule,

    MatFormFieldModule,
    MatInputModule,
    MatIconModule,

    MatSnackBarModule,
    
    MatInputModule,
    MatButtonModule,
    QRCodeModule,

    NgxGraphModule,

    DragDropModule,

    NgAnimatedBorderModule,
    MatDialogModule,
    MatProgressSpinnerModule,


    SlickCarouselModule,
    NgxTwitterWidgetsModule,

    MonacoEditorModule.forRoot() // use forRoot() in main app module only.


  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [LnurlPayDialogComponent],

})
export class AppModule { }
