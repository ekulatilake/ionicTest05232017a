import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Data }  from '../../providers/data';
/**
 * Generated class for the Detailone page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-detailone',
  templateUrl: 'detailone.html',
})
export class Detailone {
  artist : any;
  albums : any;
  localData : any;
  iAlbums : any;
  albumsA : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public data: Data) {
    this.navCtrl = navCtrl;
    this.artist = navParams.data;
    this.localData = data;
    //alert("Trying to Load Albums:" + this.artist.name +" "+ this.artist.artistId+" "+this.artist.trackId);
   this.loadAlbums();

  }

/*loadPeople(){
    this.data.load()
    .then(iData => {
      this.people = iData;
    });
  }*/

  loadAlbums(){
    alert("TrackID:"+this.artist.trackId);
    this.data.loadAlbums(this.artist.trackId)
    .then(albumsA => {this.albums = albumsA} );
    alert("AlbumsA Load:" + this.albumsA);
    alert("Albums Load:" + this.albums);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Detailone');
    
   //this.albums = this.localData.loadAlbums(this.artist.trackId);
   // alert(this.artist.trackId);

  }

}
