import { Component, OnInit } from '@angular/core';
import { ImgDirectoryService } from 'src/app/service/img-directory.service';

@Component({
  selector: 'app-auto-garage',
  templateUrl: './auto-garage.component.html',
  styleUrls: ['./auto-garage.component.scss']
})
export class AutoGarageComponent implements OnInit{
projectDetails: any;
pageLoading = true;
constructor(private imgService: ImgDirectoryService){}
ngOnInit(): void {
  this.projectDetails = this.imgService.autoGarageInfo;

  setTimeout(() => {
    this.pageLoading = false;
  }, 3000)
}
}