import { NgModule } from '@angular/core';
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
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProblemComponent } from './components/problem/problem.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { CodingComponent } from './components/coding/coding.component';
import { ToolsComponent } from './components/tools/tools.component';
import { ReferencesComponent } from './components/references/references.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    ProblemComponent,
    CodingComponent,
    ToolsComponent,
    ReferencesComponent
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
    NgxGraphModule,

    DragDropModule,

    NgAnimatedBorderModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MonacoEditorModule.forRoot() // use forRoot() in main app module only.


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
