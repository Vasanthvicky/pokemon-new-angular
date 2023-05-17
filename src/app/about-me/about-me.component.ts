import { Component, OnInit } from "@angular/core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { ImgDirectoryService } from "../service/img-directory.service";

@Component({
  selector: "app-about-me",
  templateUrl: "./about-me.component.html",
  styleUrls: ["./about-me.component.scss"],
})
export class AboutMeComponent implements OnInit {
  myLinkedInIcon = faLinkedin;
  myGithubIcon = faGithub;
  faDownload = faDownload;

  profilePic: any;

  skillPic: any;

  constructor(private imgService: ImgDirectoryService){};

  pageLoading = true;

  ngOnInit(): void {
    this.profilePic = this.imgService.myImg;
    this.skillPic = this.imgService.skillImg;
    setTimeout(() => {
      this.pageLoading = false;
    }, 5000);
  }
}
