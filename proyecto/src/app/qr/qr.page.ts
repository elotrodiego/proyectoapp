import { Component, OnInit } from '@angular/core';
import {QRScanner,QRScannerStatus} from "@ionic-native/qr-scanner/ngx"

import { CameraPreview, CameraPreviewOptions, CameraPreviewPictureOptions } from '@capacitor-community/camera-preview';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {
  image = null;
  cameraActive = true;
  torchActive = false;

  constructor() { }

  async openCamera() {
    console.log("opencamera");
    const cameraPreviewOptions: CameraPreviewOptions = {
      position: 'rear',
      parent: 'cameraPreview',
      className: 'cameraPreview'
    };
    CameraPreview.start(cameraPreviewOptions);
  }

  ngOnInit() {
    
  }

  ionViewDidEnter() {
    const cameraPreviewOptions: CameraPreviewOptions = {
      position: 'rear',
      parent: 'cameraPreview',
      className: 'cameraPreview'
    };
    CameraPreview.start(cameraPreviewOptions);
  }
}
