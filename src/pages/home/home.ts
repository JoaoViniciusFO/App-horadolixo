import { OneSignalService } from './../../providers/OneSignalService';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpModule, Http } from '@angular/http';
import { Service } from '../../providers/service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[Geolocation, OneSignalService]
})
export class HomePage {
  public lat: number;
  public long: number;
  constructor(public navCtrl: NavController, 
    private geolocation: Geolocation, 
    private oneSignalService: OneSignalService, 
    private http: Http,
    private service: Service) {

  }

  public getMyPosition(){
    this.oneSignalService.getAppId().then()
    console.log("plegue");
    this.geolocation.getCurrentPosition().then((position)=>{
      this.updateUserDevice(position);
    });
  }

  public updateUserDevice(position){
    this.oneSignalService.getAppId().then((ids) => {
      this.lat = position.coords.latitude;
      this.long = position.coords.longitude;
      let user = {
        "name" : "teste da silva",
        "lat": this.lat,
        "long": this.long,
        "deviceId": ids.userId 
      }
      this.setNewUser(user);
    })
  }

  public setNewUser(user){
    this.service.setNewUser(user)
    .subscribe(
      res => console.log(res.json()),
      erro => console.log(erro.json())
    )
  }

}
