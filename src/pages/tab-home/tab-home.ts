import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the TabHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab-home',
  templateUrl: 'tab-home.html',
})
export class TabHomePage {

  userDetail: any;
  liginStatus: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public app.App){
    //ตรวจเช็คว่ามีตัวแปรมั้ย userData อยู่ใน local storage หรือไม่
    let data = localStorage.getItem('userData');
    if (data == null) {
      this.userDetail = "ผู้เยื่ยมชม";
    } else {
      this.userDetail = Data;
    }

  }
}


ionViewDidLoad() {
  console.log('ionViewDidLoad TabHomePage');
}

showLogin(){
  this.app.getRootNav(), Push(LoginPage);
}

Logout(){
  localStorage.removeItem('userData');
  this.navCtrl.setRoot(TabsPage);
}

showLogin(){
  this.app.getRootNav().push(xxx);
}
  
}
