import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  department: string = 'All';

  itiTracks: { id: number; name: string; department: string }[];
  filteredTracks: { id: number; name: string; department: string }[];
  constructor() {
    this.itiTracks = [
      {
        id: 1,
        name: 'PD',
        department: 'SD',
      },
      {
        id: 2,
        name: 'cross Platform',
        department: 'SD',
      },
      {
        id: 3,
        name: 'UI/UX',
        department: 'Design',
      },
      {
        id: 4,
        name: '2D Graphics',
        department: 'Design',
      },
      {
        id: 5,
        name: 'java',
        department: 'java',
      },
    ];
    this.filteredTracks = this.itiTracks;
  }

  filterByDepartment() {
    this.filteredTracks =
      this.department == 'All'
        ? this.itiTracks
        : this.itiTracks.filter(
            (track) =>
              track.department.toLowerCase() == this.department.toLowerCase()
          );
  }
}
