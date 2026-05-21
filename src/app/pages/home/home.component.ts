import { Component, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  api = inject(ApiService);

  message = '';

  ngOnInit(): void {
    this.api.getHealth().subscribe(res => {
      this.message = res;
    });
  }
}