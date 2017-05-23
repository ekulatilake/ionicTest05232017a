import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import {{CheckListModel}} from '../../../app/models/checklist-model';
//import {ChecklistModel} from '../../models/checklist-model';
import { TextToSpeech } from '@ionic-native/text-to-speech';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  checkListModel : any;
  text:string;
  constructor(public navCtrl: NavController, private tts : TextToSpeech) {
    //this.checkListModel = new ChecklistModel('my checkList1');
    //this.checkListModel.addItem({"title":"TaskOne","checked":false});
  /*  this.tts.speak('Hello World')
  .then(() => console.log('Success'))
  .catch((reason: any) => console.log(reason));
  }*/
}

async sayText(){
  alert("In Say Text");
  try{
    await this.tts.speak(this.text);
    console.log("I spoke "+ this.text);
  }
  catch(e){
    console.log(e);
  }

}

}
