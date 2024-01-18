import { Component, OnInit } from '@angular/core';
import { Tool } from 'src/app/models/tool.model';
import { DataService } from 'src/app/services/data.service';



@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

  tools: Tool[] = [];

  loading: boolean = false;
  error: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loading = true;
    this.dataService.fetchData<any[]>('assets/data/tools.json').subscribe(
      data => {
        this.tools = data;
        this.loading = false;
      },
      error => {
        this.error = 'Failed to load tools data.';
        this.loading = false;
      }
    );
  }

  getGradient(color: string): string {
    return `linear-gradient(145deg, ${color}, #1a2b33)`;
  }
}
