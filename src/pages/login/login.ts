import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username: string;
  password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  Login() {
    if (this.username == "admin" && this.password == "1234") {
      alert("เข้าระบบถูกต้อง");
      //บันทึกข้อมูลลง Local Storage
      localStorage.setItem("userData", this.username);
      //ปิดหน้า login แล้วกลับไปหน้าหลัก
    this.navCtrl.setRoot(TabsPage);

    } else {
      alert("ข้อมูลเข้าระบบไม่ถูกต้อง");
    }
  }
}
