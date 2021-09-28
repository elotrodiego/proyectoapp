import { Component } from '@angular/core';
import { CameraPreview } from '@ionic-native/camera-preview/ngx'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  base64:string="data:image/png;base64,";

  constructor(private preview:CameraPreview) {

  }

  ngOnInit()
  {
    this.openCamera();
  }

  openCamera() {
    this.preview.startCamera({}).then((val)=>{
      alert(val);
      this.preview.takePicture().then((base64)=>{
        this.base64 = this.base64 + base64;
        this.preview.stopCamera()
      })
    },(err)=>{
      alert(JSON.stringify(err));
    })
  }
}
