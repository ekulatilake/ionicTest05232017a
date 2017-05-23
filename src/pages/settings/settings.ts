import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Data }  from '../../providers/data';
import { HttpModule } from '@angular/http';
/**
 * Generated class for the Settings page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class Settings {
   public country: any;
      countries = [
        {
          name: 'United States',
          local_name: 'USA',
          code: 'us',
          currency: '$'
        },
        {
          name: 'United Kingdom',
          code: 'gb',
          local_name: 'The UK',
          currency: '£'
        },
        {
          name: 'Russia',
          local_name: 'Россия',
          code: 'ru'
        }
      ];
  results: any;
  people : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public data: Data, public httpService: HttpModule) {
    this.country = this.countries[0];

    this.loadPeople();

    this.data.loadAll().then(result => {
     this.results = result;
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Settings');
  }


  public selectCountry: any;
 

 
  select(country) {
    this.selectCountry = country
    // Also keep inside service
    this.country = country;
  }


  doLookUp(){
    alert("LookUP Button Clicked");

    /*
    	this.httpService.get('https://readapesolutions.com/itunes?term='+this.keyword).
	   subscribe((response) => {
		this.results = response.json().results;
	}); */
  

  }

  loadPeople(){
    this.data.load()
    .then(iData => {
      this.people = iData;
    });
  }

}
