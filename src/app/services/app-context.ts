import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WorkspaceEnum } from '../enums/workspace.enum';

@Injectable({
  providedIn: 'root'
})
export class AppContext {
  private apiUrl = `${environment.apiUrl}/categories`;
  public topic: string = "test";
  public activeWorkspace: WorkspaceEnum = WorkspaceEnum.About;

  constructor() { }


  storeActiveWorkspace(workspace: WorkspaceEnum) {
    this.activeWorkspace = workspace;
  }

  retrieveActiveWorkspace(): WorkspaceEnum {
    return this.activeWorkspace;
  }



}