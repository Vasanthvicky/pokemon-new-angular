import { Component } from '@angular/core';
import { ImgDirectoryService } from 'src/app/service/img-directory.service';
import { projectData } from '../project-data';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { ProjectDataService } from 'src/app/service/project-data.service';
// import { ProjectDataService } from '../project-data.service';

@Component({
  selector: 'app-project-list-view',
  templateUrl: './project-list-view.component.html',
  styleUrls: ['./project-list-view.component.scss']
})
export class ProjectListViewComponent {

  pageLoading = true; 

  projectDetails: any;

  projectDataInfo = projectData;

  projectList: any;
  value: any;
  workLink: any;
  work: any;

  psListView: any;
  projectData: any[];

  constructor(private imgService: ImgDirectoryService,
    private router: Router, private route: ActivatedRoute,
    private projectService: ProjectDataService){};

  ngOnInit(): void {
    this.projectDetails = this.imgService.autoGarageInfo;
    this.projectData = this.projectService.projectData;
    console.log(projectData);
    setTimeout(() => {
      this.pageLoading = false;
    }, 3000);
    // console.log(this.navigateTo());


    // console.log(this.projectDataInfo)

    // this.psListView = this.ps.projectData;

    // this.workLink = this.route.snapshot.paramMap.get('routerLink');
    // this.work = this.ps.projectData.find(x => x.routerLink == this.workLink);
    // this.route.params.subscribe(params => {
    //   const projectName = params['routerLink'];
    //   if(!this.ps.projectData.find(work => work.routerLink === projectName)) {
    //     this.router.navigate(['']);
    //   }else {
    //     this.work = this.ps.projectData.find(work => work.routerLink === projectName);
    //   }
    // })
  }

  navigateTo():any {
    // this.router.navigate([['./'] + this.projectDataInfo[0].routerLink], {relativeTo: this.route});
    
    // this.route.params.subscribe(params => {
    //   return this.router.navigate(this.projectDataInfo[0].routerLink);
    // })
   
    // this.value = this.route.snapshot.paramMap.get(this.projectList);
    // this.router.navigate(this.value)

    // const routingData = this.projectService.projectData[0].routerLink;
    // console.log(routingData);
    // this.router.navigate(['/projects/' + routingData])
    
    
    // for() {
    //   if() {

    //   }
    // }
  }
  navigateToAg(): any {
    const routingData = this.projectService.projectData[0].routerLink;
    console.log(routingData);
    this.router.navigate(['/projects/' + routingData])
  }
  navigateToDems(): any {
    const routingData = this.projectService.projectData[1].routerLink;
    console.log(routingData);
    this.router.navigate(['/projects/' + routingData])
  }
  navigateToEp(): any {
    const routingData = this.projectService.projectData[2].routerLink;
    console.log(routingData);
    this.router.navigate(['/projects/' + routingData])
  }
  navigateToFms(): any {
    const routingData = this.projectService.projectData[3].routerLink;
    console.log(routingData);
    this.router.navigate(['/projects/' + routingData])
  }
  navigateToPms(): any {
    const routingData = this.projectService.projectData[4].routerLink;
    console.log(routingData);
    this.router.navigate(['/projects/' + routingData])
  }
  navigateToRa(): any {
    const routingData = this.projectService.projectData[5].routerLink;
    console.log(routingData);
    this.router.navigate(['/projects/' + routingData])
  }
  navigateToVbms(): any {
    const routingData = this.projectService.projectData[6].routerLink;
    console.log(routingData);
    this.router.navigate(['/projects/' + routingData])
  }
}
