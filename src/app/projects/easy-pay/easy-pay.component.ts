import { Component, OnInit } from '@angular/core';
import { ImgDirectoryService } from 'src/app/service/img-directory.service';

@Component({
  selector: 'app-easy-pay',
  templateUrl: './easy-pay.component.html',
  styleUrls: ['./easy-pay.component.scss']
})
export class EasyPayComponent implements OnInit{
  pageLoading = true;
  easyPayDetails: any;
  constructor(private imgService : ImgDirectoryService) {}

  ngOnInit(): void {
    this.easyPayDetails = this.imgService.easyPayInfo;

    setTimeout(() => {
      this.pageLoading = false;
    }, 3000);
  }
}
