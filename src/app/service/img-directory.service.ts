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
  // myImg2 = [ {
  //   imgInfo : [
  //     {
  //       src: "https://firebasestorage.googleapis.com/v0/b/vigneshvasanthportfolio.appspot.com/o/Profile-img%2FProfile-Male-PNG.png?alt=media&token=87d3b75e-71bc-4830-a919-3d8044ab03eb",
  //       name: 'profile pic3'
  //     }
  //   ]
  // }
  // ]
}
