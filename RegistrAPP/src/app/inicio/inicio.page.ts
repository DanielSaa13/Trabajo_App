import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class inicioPage {

  constructor(private alertController: AlertController) {}

  async mostrarAlertaBienvenida() {
    const alert = await this.alertController.create({
      header: 'Bienvenido',
      message: '¡Hola, usuario!',
      buttons: ['Aceptar']
    });

    await alert.present();
  }
}
