import { Component, OnInit } from "@angular/core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-about-me",
  templateUrl: "./about-me.component.html",
  styleUrls: ["./about-me.component.scss"],
})
export class AboutMeComponent implements OnInit {
  myLinkedInIcon = faLinkedin;
  myGithubIcon = faGithub;
  faDownload = faDownload;
  ngOnInit(): void {}
}
