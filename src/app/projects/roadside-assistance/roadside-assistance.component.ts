import { Component, OnInit } from '@angular/core';
import { ImgDirectoryService } from 'src/app/service/img-directory.service';

@Component({
  selector: 'app-roadside-assistance',
  templateUrl: './roadside-assistance.component.html',
  styleUrls: ['./roadside-assistance.component.scss']
})
export class RoadsideAssistanceComponent implements OnInit{
pageLoading = true;
roadAssistanceDetails: any;
constructor(private imgService: ImgDirectoryService){}

  ngOnInit(): void {
    this.roadAssistanceDetails = this.imgService.roadAssistanceInfo;

    setTimeout(() => {
      this.pageLoading = false;
    }, 3000);
  }
}
