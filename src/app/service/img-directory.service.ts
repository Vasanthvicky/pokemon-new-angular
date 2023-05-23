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

  autoGarageInfo = [
    {
      title: 'AUTO Garage',
      src: "https://firebasestorage.googleapis.com/v0/b/vigneshvasanthportfolio.appspot.com/o/project-img%2Fauto-garage%2FAUTO-Garage-1.png?alt=media&token=0519b2e2-345b-4658-b35c-7fa6e9e70cce",
      description: '',
    },
    {
      title:'',
      src: "https://firebasestorage.googleapis.com/v0/b/vigneshvasanthportfolio.appspot.com/o/project-img%2Fauto-garage%2FAUTO-Garage-2.png?alt=media&token=f11508b2-6e73-4b52-a40c-1c7d8e725a73",
      description: '',
    }
  ];

  vbmsInfo = [
    {
      title:'Vehicle Booking Management System',
      src: "https://firebasestorage.googleapis.com/v0/b/vigneshvasanthportfolio.appspot.com/o/project-img%2FVehicle-Booking-Management-System%2FVIMS-1.png?alt=media&token=59d77832-0f87-47ce-af5b-1fa8df7c0a53",
      description: '',
    },
    {
      title:'',
      src: "https://firebasestorage.googleapis.com/v0/b/vigneshvasanthportfolio.appspot.com/o/project-img%2FVehicle-Booking-Management-System%2FVIMS-2.png?alt=media&token=fd1e96a5-66ef-450b-b2fe-36c283be3164",
      description: '',
    },
    {
      title:'',
      src: "https://firebasestorage.googleapis.com/v0/b/vigneshvasanthportfolio.appspot.com/o/project-img%2FVehicle-Booking-Management-System%2FVIMS-3.png?alt=media&token=3354a8e4-687d-4a47-acee-3607374a9560",
      description: '',
    },
    {
      title:'',
      src: "https://firebasestorage.googleapis.com/v0/b/vigneshvasanthportfolio.appspot.com/o/project-img%2FVehicle-Booking-Management-System%2FVIMS-4.png?alt=media&token=d07837a2-3f97-4820-a677-ea0a3b8467a8",
      description: '',
    },
  ];

  roadAssistanceInfo = [
    {
      title:'Roadside Assistance',
      src: "https://firebasestorage.googleapis.com/v0/b/vigneshvasanthportfolio.appspot.com/o/project-img%2FRoadside-Assistance%2FRSA-1.png?alt=media&token=cc926179-8eb3-43fe-878a-df9b3ab447ed",
      description: '',
    },
    {
      title:'',
      src: "https://firebasestorage.googleapis.com/v0/b/vigneshvasanthportfolio.appspot.com/o/project-img%2FRoadside-Assistance%2FRSA-2.png?alt=media&token=f3987b17-9bdb-4d1b-a022-20b2aefdaa9b",
      description: '',
    },
    {
      title:'',
      src: "https://firebasestorage.googleapis.com/v0/b/vigneshvasanthportfolio.appspot.com/o/project-img%2FRoadside-Assistance%2FRSA-3.png?alt=media&token=d9372d86-9a80-4365-9b54-501a9995b5e7",
      description: '',
    },
    {
      title:'',
      src: "https://firebasestorage.googleapis.com/v0/b/vigneshvasanthportfolio.appspot.com/o/project-img%2FRoadside-Assistance%2FRSA-4.png?alt=media&token=8bde94a4-7fb6-481f-8518-3efa0c260f01",
      description: '',
    },
  ];

  pmsInfo = [
    {
      title:'PMS',
      src: "https://firebasestorage.googleapis.com/v0/b/vigneshvasanthportfolio.appspot.com/o/project-img%2FPMS%2FPMS-1.png?alt=media&token=9379f79f-d680-4309-b555-a8b3be5f7703",
      description: '',
    },
    {
      title:'',
      src: "https://firebasestorage.googleapis.com/v0/b/vigneshvasanthportfolio.appspot.com/o/project-img%2FPMS%2FPMS-2.png?alt=media&token=6d83c6fd-68e2-49e2-81c7-22eb1d947fad",
      description: '',
    },
    {
      title:'',
      src: "https://firebasestorage.googleapis.com/v0/b/vigneshvasanthportfolio.appspot.com/o/project-img%2FPMS%2FPMS-3.png?alt=media&token=c2c5c91f-26ba-4832-8bb2-b3bf7de330f5",
      description: '',
    },
    {
      title:'',
      src: "https://firebasestorage.googleapis.com/v0/b/vigneshvasanthportfolio.appspot.com/o/project-img%2FPMS%2FPMS-4.png?alt=media&token=f709228f-6bd1-4353-a77b-12aa6ec36e84",
      description: '',
    },
    {
      title:'',
      src: "https://firebasestorage.googleapis.com/v0/b/vigneshvasanthportfolio.appspot.com/o/project-img%2FPMS%2FPMS-5.png?alt=media&token=dc9090d8-2938-4c31-ae71-cee09313b926",
      description: '',
    },
  ];
  fmsInfo = [
    {
      title:'Finance Management System',
      src: "https://firebasestorage.googleapis.com/v0/b/vigneshvasanthportfolio.appspot.com/o/project-img%2FFinance-Management-System%2FFMS-1.png?alt=media&token=d74e5290-cc81-40e2-9545-25b3b458b6cb",
      description: '',
    },
    {
      title:'',
      src: "https://firebasestorage.googleapis.com/v0/b/vigneshvasanthportfolio.appspot.com/o/project-img%2FFinance-Management-System%2FFMS-2.png?alt=media&token=d0996e5e-f016-4d1c-9292-b7baf96c5ba3",
      description: '',
    },
    {
      title:'',
      src: "https://firebasestorage.googleapis.com/v0/b/vigneshvasanthportfolio.appspot.com/o/project-img%2FFinance-Management-System%2FFMS-3.png?alt=media&token=9d9eac30-a592-4a16-8367-4ac6dea2b3a5",
      description: '',
    },
    {
      title:'',
      src: "https://firebasestorage.googleapis.com/v0/b/vigneshvasanthportfolio.appspot.com/o/project-img%2FFinance-Management-System%2FFMS-4.png?alt=media&token=8abefe23-4111-456b-a405-d048c9b2cd59",
      description: '',
    },    
  ];

  easyPayInfo = [
    {
      title:'Easy Pay',
      src: "https://firebasestorage.googleapis.com/v0/b/vigneshvasanthportfolio.appspot.com/o/project-img%2FEasy-Pay%2FEasyPay-1.png?alt=media&token=dd4edf06-3f1c-40c2-9e1e-d0220ef82dac",
      description: '',
    },
    {
      title:'',
      src: "https://firebasestorage.googleapis.com/v0/b/vigneshvasanthportfolio.appspot.com/o/project-img%2FEasy-Pay%2FEasyPay-2.png?alt=media&token=664f14ae-2b00-44df-b664-e9f6a5a9d344",
      description: '',
    },
    {
      title:'',
      src: "https://firebasestorage.googleapis.com/v0/b/vigneshvasanthportfolio.appspot.com/o/project-img%2FEasy-Pay%2FEasyPay-3.png?alt=media&token=bfb5bee6-ea50-4aea-ac3a-859e7a8a3ea6",
      description: '',
    },
    {
      title:'',
      src: "https://firebasestorage.googleapis.com/v0/b/vigneshvasanthportfolio.appspot.com/o/project-img%2FEasy-Pay%2FEasyPay-4.png?alt=media&token=84a51d82-929b-4811-81b1-caa34e87a0b2",
      description: '',
    },
    {
      title:'',
      src: "https://firebasestorage.googleapis.com/v0/b/vigneshvasanthportfolio.appspot.com/o/project-img%2FEasy-Pay%2FEasyPay-5.png?alt=media&token=d4a352f8-f5ce-4b0f-b2fd-609b20bfc4d4",
      description: '',
    },
    {
      title:'',
      src: "https://firebasestorage.googleapis.com/v0/b/vigneshvasanthportfolio.appspot.com/o/project-img%2FEasy-Pay%2FEasyPay-6.png?alt=media&token=dada2e70-44d6-4c5c-8d3e-f63741fd5e3d",
      description: '',
    },
  ];
  demsInfo =[
    {
      title:'Digital Expenses Management System',
      src: "https://firebasestorage.googleapis.com/v0/b/vigneshvasanthportfolio.appspot.com/o/project-img%2FDigital-Expenses-Management-System%2FDEMS-1.png?alt=media&token=73b93ba8-7ecc-4dc5-88cc-a443829de975",
      description: '',
    },
    {
      title:'',
      src: "https://firebasestorage.googleapis.com/v0/b/vigneshvasanthportfolio.appspot.com/o/project-img%2FDigital-Expenses-Management-System%2FDEMS-2.png?alt=media&token=72c4b2fc-a290-4cd4-8740-609219a3974b",
      description: '',
    },
    {
      title:'',
      src: "https://firebasestorage.googleapis.com/v0/b/vigneshvasanthportfolio.appspot.com/o/project-img%2FDigital-Expenses-Management-System%2FDEMS-3.png?alt=media&token=5145c0c4-68a6-42f4-89ea-bc3af0ac8b88",
      description: '',
    },
    {
      title:'',
      src: "https://firebasestorage.googleapis.com/v0/b/vigneshvasanthportfolio.appspot.com/o/project-img%2FDigital-Expenses-Management-System%2FDEMS-4.png?alt=media&token=7168c728-137d-4bb9-b2a2-93b76d201616",
      description: '',
    }
  ];
}
