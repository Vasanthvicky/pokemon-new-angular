import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerService } from './src/public-api';

@Component({
  selector: 'app-data-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit {
  userDataLists: any = [];
  userDataProfile: any[] = [];
  page = 1;

  name: string;
  public profile: string;
  showProfile: true;
  public circleProfile: string;
  data: string;
  /* private colors = [
    '#eb7181', //red
    '#468547',// green
    '#ffd558', //yellow
    '#367082',// blue
  ]; */

  constructor(readonly loggerService: LoggerService) { }

  ngOnInit(): void {
    this.userDataList();
    //console.log(this.userDataList());
  }
  userDataList() {
    this.loggerService.getPockemonApiDetails().subscribe((myResponse: any) => {
      this.userDataLists = (myResponse);
    });
  }

  firstLetterProfile() {
    this.showProfile = true;
/*     this.createProfiles();
 */
    /* const randomIndex = Math.floor(Math.random() * Math.floor(this.colors.length));
    this.circleProfile = this.colors[randomIndex] */
  }

/*   generateProfileImg():any {
    this.profile = this.createProfiles();
  } */


  createProfiles(userDataLists):void {
    
     /*  this.userDataProfile = this.userDataLists.map((res: Response) => {
          res.json();
          console.log(res);
      }); */
    

      const canvas = document.createElement('canvas');
      canvas.style.display = 'none';
      canvas.width = 50;
      canvas.height =50;
      document.body.appendChild(canvas);

      const context = canvas.getContext('2d');
      context.fillStyle = '#476ce8';
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.font = '16px arial';
      context.fillStyle = '#fff';

      const nameArray = this.userDataLists.split(' ');
      let userValueDetails;

      for(let i = 0; i < nameArray.length; i++) {
        if(i <=1) {
          userValueDetails = userValueDetails + nameArray[i][0];
        }
        if(userValueDetails.length > 1) {
          context.fillText(userValueDetails.toUpperCase(), 7, 22);
        }else {
          context.fillText(userValueDetails.toUpperCase(), 10, 22);
        }
        
        const data = canvas.toDataURL();
        document.body.removeChild(canvas);
        // return data;
      }
  }

}
