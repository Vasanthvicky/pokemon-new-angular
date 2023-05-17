import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ImgDirectoryService {
  constructor() {}

  //Get Imgs
  myImg = [
    {
      src: "https://firebasestorage.googleapis.com/v0/b/vigneshvasanthportfolio.appspot.com/o/Profile-img%2F0Y9A8158.JPG?alt=media&token=e3009fe2-db38-4862-9e1c-016453d09e39",
      name: 'profile pic'
    },
    // {
    //   src: "https://firebasestorage.googleapis.com/v0/b/vigneshvasanthportfolio.appspot.com/o/Profile-img%2FProfile-Male-PNG.png?alt=media&token=87d3b75e-71bc-4830-a919-3d8044ab03eb",
    //   name: 'profile pic2'
    // }
  ];
  skillImg = [ 
    {
      src: "https://firebasestorage.googleapis.com/v0/b/vigneshvasanthportfolio.appspot.com/o/skills-img%2FHTML5.png?alt=media&token=958ec404-7c26-4ac4-b636-68c407b709ce",
      name: 'HTML'
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/vigneshvasanthportfolio.appspot.com/o/skills-img%2FCSS3.png?alt=media&token=c8f59690-47b1-4ee2-9a73-53b73f6c44eb",
      name: 'CSS'
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/vigneshvasanthportfolio.appspot.com/o/skills-img%2Fjavascript-logo.png?alt=media&token=85453924-09a3-4f1c-af19-c3c8b6b3b06f",
      name: 'JS'
    },    
    {
      src: "https://firebasestorage.googleapis.com/v0/b/vigneshvasanthportfolio.appspot.com/o/skills-img%2Fless.png?alt=media&token=f4b8d105-23b7-4984-bc9a-9c2363cde57e",
      name: 'Less'
    },   

    {
      src: "https://firebasestorage.googleapis.com/v0/b/vigneshvasanthportfolio.appspot.com/o/skills-img%2Fsass.png?alt=media&token=d0f8a133-f492-4cbe-a316-eca625ca4312",
      name: 'Sass'
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/vigneshvasanthportfolio.appspot.com/o/skills-img%2FTailwind_CSS_Logo.png?alt=media&token=96f2ea25-1164-46e7-817c-781800e42205",
      name: 'Tailwind CSS'
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/vigneshvasanthportfolio.appspot.com/o/skills-img%2Ftype-script.png?alt=media&token=94485e6d-d498-4e08-9dfb-e546a52a8d8f",
      name: 'Type Script'
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/vigneshvasanthportfolio.appspot.com/o/skills-img%2Fangular.png?alt=media&token=d5d4c9c4-d29f-4d45-b2c2-7df6c0cd33de",
      name: 'Angular JS'
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/vigneshvasanthportfolio.appspot.com/o/skills-img%2Fgithub.png?alt=media&token=8d88d67f-aece-4649-99f4-3883a92a5edb",
      name: 'Git Hub'
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/vigneshvasanthportfolio.appspot.com/o/skills-img%2FBitbucket.png?alt=media&token=5758a132-4972-48e9-96c3-fd57ca823097",
      name: 'Bitbucket'
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/vigneshvasanthportfolio.appspot.com/o/skills-img%2Fatlassian_jira_logo_icon.png?alt=media&token=dc1cc3df-db7a-49c1-89ca-861b6d8e5170",
      name: 'Jira Service Desk'
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/vigneshvasanthportfolio.appspot.com/o/skills-img%2FVisual_Studio.png?alt=media&token=673f029d-c858-47f0-9449-372fdd3e41ac",
      name: 'Visual Studio Code'
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/vigneshvasanthportfolio.appspot.com/o/skills-img%2Fatlassian-logo.png?alt=media&token=168ad22c-d435-4509-a437-c244c1ff4252",
      name: ''
    },
  ];
}
