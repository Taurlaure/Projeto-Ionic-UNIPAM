import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
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

  public formLogin : FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb : FormBuilder) {
    this.formLogin = fb.group({
      email : [null, [Validators.required]],
      senha : [null, [Validators.required]]
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login()
  {
    console.log(this.formLogin.value);
  }
}
