import { Component, AfterViewInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';
import { createAnimation, Animation } from '@ionic/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private animationCtrl:AnimationController) {

  }

  ngAfterViewInit() {
    const animation = this.animationCtrl
    .create()
    .addElement(document.querySelector('.square'))
    .duration(1200)



    .fromTo('transform', 'translateX(-200px)', 'translateX(5px)')
    .fromTo('opacity', '0.2', '1');

    animation.play();
  }
}
