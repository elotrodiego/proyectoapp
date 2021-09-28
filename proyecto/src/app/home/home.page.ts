import { Component, AfterViewInit } from '@angular/core';
import { AnimationController, NavController } from '@ionic/angular';
import { createAnimation, Animation } from '@ionic/core';
import { LoadingController } from '@ionic/angular';
import { MenuPage } from '../menu/menu.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private animationCtrl:AnimationController,
    public loadingController: LoadingController,
    private router: Router) {
  }

  ngAfterViewInit() {
    const animation = this.animationCtrl
    .create()
    .addElement(document.querySelector('.logo'))
    .duration(1200)



    .fromTo('transform', 'translateX(-200px)', 'translateX(5px)')
    .fromTo('opacity', '0.2', '1');

    animation.play();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'loginClass',
      message: 'Iniciando sesión...',
      duration: 2000
    });
    await loading.present();

    const {role,data} = await loading.onDidDismiss();
    this.router.navigateByUrl('/menu');
  }


}
