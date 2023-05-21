import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  pageLoading = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.pageLoading = false;
    }, 3000);
  }
}
