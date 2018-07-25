import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  userData ={
    "fullname;"",
    "email";"",
    "tel";"",
    "username";"",
    "password";"",

  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register(){
    this.webapi.postData,'register.php').then(result)=>{
      this.responseData = result;
      if(this.responseData.userData){
        //โชว์กล่องข้อความ
        alert('ลงทะเบียนเรียบร้อยแล้ว');
        this.navCtrl.setRoot(TabsPage)
      }
    }
  }
  else{
    
  }
}
