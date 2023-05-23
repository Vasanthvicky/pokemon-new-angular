import { Component, OnInit } from '@angular/core';
import { ImgDirectoryService } from "../service/img-directory.service";
import { projectData } from './project-data';
import { navbarData } from '../side-nav/nav-data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  pageLoading = true;

  projectDetails: any;

  projectDataInfo = projectData;

  projectList: any;

  constructor(private imgService: ImgDirectoryService){};

  ngOnInit(): void {
    this.projectDetails = this.imgService.autoGarageInfo;
    setTimeout(() => {
      this.pageLoading = false;
    }, 3000);

    console.log(this.projectDataInfo)
  }


}
