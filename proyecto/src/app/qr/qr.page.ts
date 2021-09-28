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
  cameraActive = false;
  torchActive = false;

  constructor() { }

  openCamera() {
    const cameraPreviewOptions: CameraPreviewOptions = {
      position: 'rear',
      parent: 'cameraPreview',
      className: 'cameraPreview'
    };
    CameraPreview.start(cameraPreviewOptions);
    this.cameraActive = true;
  }

  ngOnInit() {
    
  }
}
