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

  constructor(private imgService: ImgDirectoryService){};

  ngOnInit(): void {
    this.profilePic = this.imgService.myImg;
    console.log(this.profilePic)
  }

  
}
