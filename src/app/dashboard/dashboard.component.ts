// Import statements
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Edge, GraphComponent, Layout, Node } from '@swimlane/ngx-graph';
import { Workspace, Week } from 'src/app/models/workspace.model';
import { AppContext } from 'src/app/services/app-context';
import { OpenaiService } from 'src/app/services/open-ai.service';
import { WorkspaceEnum } from '../enums/workspace.enum';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard2.component.css', './dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // Properties
  weeks: Week[] = [];
  workspaces: Workspace[] = [];
  showTags = true;
  form: FormGroup;
  public jsonData: any; // JSON data property

  Workspace = WorkspaceEnum
  activeWorkspace: WorkspaceEnum = WorkspaceEnum.Tools
  // Constructor
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private appContext: AppContext,
    private openaiService: OpenaiService
  ) {
    this.form = new FormGroup({
      userInput: new FormControl(''),
      workflow: new FormControl(''),
      tone: new FormControl(''),
    });
  }

  // Lifecycle hooks
  ngOnInit(): void {
    
    this.activeWorkspace = this.appContext.retrieveActiveWorkspace() ?? WorkspaceEnum.Visuals
    this.showWorkspace(this.activeWorkspace)
      this.weeks = [
        {
          title: 'Week 1',
          imageUrl: 'assets/btcIllustrated/mindmap/test.png',
          tag: 'Week 1',
          locked: false
        },
        {
          title: 'Week 2',
          imageUrl: 'assets/btcIllustrated/mindmap/test2.png',
          tag: 'Week 2',
          locked: true
        },
        {
          title: 'Week 3',
          imageUrl: 'assets/btcIllustrated/mindmap/test3.png',
          tag: 'Week 3',
          locked: true
        }
      ];


      this.workspaces = [
        {
          title: 'Problem',
          imageUrl: 'assets/btcIllustrated/icons/problem2.png',
          tag: WorkspaceEnum.Problem
        },
        {
          title: 'Coding',
          imageUrl: 'assets/btcIllustrated/icons/code.png',
          tag: WorkspaceEnum.Coding
        },
        {
          title: 'Visuals',
          imageUrl: 'assets/btcIllustrated/icons/visuals.png',
          tag: WorkspaceEnum.Visuals
        },
        {
          title: 'References',
          imageUrl: 'assets/btcIllustrated/icons/deepdive.png',
          tag: WorkspaceEnum.References
        },
        {
          title: 'Tools',
          imageUrl: 'assets/btcIllustrated/icons/analogy.png',
          tag: WorkspaceEnum.Tools
        }
      ];
  }

  ngAfterViewInit(): void {
  }


  truncateUrl(url: string, length: number): string {
    if (url.length > length) {
      return url.substring(0, length) + '...';
    }
    return url;
  }

  async showWorkspace(workspace: WorkspaceEnum) {
    
    this.activeWorkspace = workspace
    this.appContext.storeActiveWorkspace(this.activeWorkspace)
  }

  navigateToWorkspace(week: Week) {
    // If the week is locked, return early and do nothing
    if (week.locked) {
      return;
    }
    
    
    this.activeWorkspace = this.Workspace.Coding
    this.appContext.storeActiveWorkspace(this.activeWorkspace)
    // Navigate to the 'app-problem' workspace or handle as needed
    // Assuming 'app-problem' is a route you have set up in your routing module
    this.router.navigate(['/app-problem']);
  }
  

}
