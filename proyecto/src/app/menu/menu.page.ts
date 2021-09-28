import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(public toastController: ToastController) { }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Has iniciado sesión correctamente.',
      duration:1000
    });
    toast.present();
  }

  ngOnInit() {
    this.presentToast();
  }

}
