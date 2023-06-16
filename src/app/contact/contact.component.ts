import { Component, OnInit } from '@angular/core';
import { faFirefoxBrowser, faLinkedin, faMailchimp, faPhoenixSquadron } from '@fortawesome/free-brands-svg-icons';
import * as fabIcons  from "@fortawesome/free-solid-svg-icons";
import { faBirthdayCake, faCalendarDays, faFlag, faHeadphonesSimple, faMailBulk, faMailReply, faVoicemail, faWindowClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  closedIcon = faWindowClose;
  myLinkedInIcon = faLinkedin;
  myMailIcon = faMailBulk;
  myPhoneIcon = faHeadphonesSimple;
  myFlag = faFlag;
  myPortfolio = faFirefoxBrowser;

  pageLoading = true;

  printIcon(daa){
    // console.log(fabIcons[daa]);
    return fabIcons[daa]
    
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.pageLoading = false;
    }, 3000);
  }
}
