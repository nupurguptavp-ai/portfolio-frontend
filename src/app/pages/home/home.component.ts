import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  description: string;
  github_link: string;
  user_id: number;
}

interface CreateProject {
  title: string;
  description: string;
  github_link: string;
  user_id: number;
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  api = inject(ApiService);

  projects: Project[] = [];

  projectData: CreateProject = {
    title: '',
    description: '',
    github_link: '',
    user_id: 1,
  };

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.api.getProjects().subscribe((res: Project[]) => {
      this.projects = res;
    });
  }

  createProject(): void {
    this.api.createProject(this.projectData).subscribe(() => {
      this.loadProjects();

      this.projectData = {
        title: '',
        description: '',
        github_link: '',
        user_id: 1,
      };
    });
  }

  deleteProject(id: number): void {
    this.api.deleteProject(id).subscribe(() => {
      this.loadProjects();
    });
  }
}
