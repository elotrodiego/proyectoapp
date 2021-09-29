import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

import { CameraPreview, CameraPreviewOptions, CameraPreviewPictureOptions } from '@capacitor-community/camera-preview';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  image = null;
  cameraActive = false;
  torchActive = false;

  constructor(public toastController: ToastController) { }

  openCamera() {
    const cameraPreviewOptions: CameraPreviewOptions = {
      position: 'rear',
      parent: 'cameraPreview',
      className: 'cameraPreview'
    };
    CameraPreview.start(cameraPreviewOptions);
    this.cameraActive = true; 
  }

  async stopCamera() {
    await CameraPreview.stop();
    this.cameraActive = false;
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Has iniciado sesión correctamente.',
      duration: 1000,
      position: 'middle'
    });
    toast.present();
  }

  ngOnInit() {
    this.presentToast();
  }

}
