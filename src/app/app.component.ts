import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Clipboard } from "@ionic-native/clipboard";
import { AlertController } from "ionic-angular";
import { HomePage } from '../pages/home/home';

declare var cordova: any;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private clipboard: Clipboard, private alertCtrl: AlertController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  inputValue: string;
  res:any;

  copy(): void {
    console.log("input-log : ", this.inputValue);
    cordova.plugins.clipboard.copy(this.inputValue,res=>this.onSuccess(res),err=>this.onFailure(err));
    // cordova.plugins.clipboard.copy(this.inputValue,()=>this.res="done")
  }
  onSuccess(res){
    this.res=res;
      const alert = this.alertCtrl.create({
      title: res,
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }
  onFailure(err){

  }
}

