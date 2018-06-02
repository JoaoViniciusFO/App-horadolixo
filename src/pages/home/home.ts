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
  public grupo: string;
  public listGroup: any;

  constructor(public navCtrl: NavController, 
    private geolocation: Geolocation, 
    private oneSignalService: OneSignalService, 
    private http: Http,
    private service: Service) {
      this.grupo = "";
      this.listGroup = [];
      this.getAllGroups();
  }

  public getAllGroups(){
    console.log("chegou aqui");
    
    this.service.getGroupList()
    .subscribe(
      res =>{
        this.listGroup = res.json();
      },
      err =>{
        console.error(err);
      }
    );
  }

  public save(){
    this.oneSignalService.getAppId().then((ids) => {
      let user = {
        "name" : "teste da silva",
        "deviceId": ids.userId,
        "grupoId": this.grupo
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
