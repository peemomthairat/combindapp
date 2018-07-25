import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { WebapiServiceProvider } from '../../providers/webapi-service/webapi-service';
import { CourseDetailPage } from '../coursedetail/coursedetail';

@IonicPage()
@Component({
  selector: 'page-tab-course',
  templateUrl: 'tab-course.html',
})
export class TabCoursePage {
  //กำหนดตัวแหรไว้เก็บค่าจาก API(JSON)
  responseDate: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public webapi: WebapiServiceProvider,
    public app: App) {
  }

  //เมื่อหน้าจอโหลดจะให้ทำอะไรต่อไป 
  ionViewDidLoad() {
    this.webapi.getData('feed_course.php').then((result) => {
      //console.log(result);
      this.responseDate = result;
    });
  }

  courseDetail(id) {
      this.app.getRootNav().push(CourseDetailPage,{id:id});
  }

}