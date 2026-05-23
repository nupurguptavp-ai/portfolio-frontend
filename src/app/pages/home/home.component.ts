import { Component, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  api = inject(ApiService);

  message = '';
  projects: any[] = [];

  ngOnInit(): void {
    this.api.getHealth().subscribe(res => {
      this.message = res;
    });
    this.api.getProjects().subscribe(res => {
      this.projects = res;
    });
  }


}