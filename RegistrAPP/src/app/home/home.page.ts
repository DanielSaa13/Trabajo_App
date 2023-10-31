import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor(private alertController: AlertController) {}

  async mostrarAlertaExito() {
    const alert = await this.alertController.create({
      header: 'Inicio de Sesión Exitoso',
      message: 'Has iniciado sesión con éxito.',
      buttons: ['Aceptar']
    });

    await alert.present();
  }
}



