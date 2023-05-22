import { Component, OnInit } from '@angular/core';
import { ImgDirectoryService } from "../service/img-directory.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  pageLoading = true;

  projectDetails: any;

  constructor(private imgService: ImgDirectoryService){};

  ngOnInit(): void {
    this.projectDetails = this.imgService.projectInfo;
    setTimeout(() => {
      this.pageLoading = false;
    }, 3000);
  }


}
