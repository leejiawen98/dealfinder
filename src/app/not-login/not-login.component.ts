import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-not-login',
  templateUrl: './not-login.component.html',
  styleUrls: ['./not-login.component.scss'],
})
export class NotLoginComponent implements OnInit {

  constructor(private router: Router, public modalCtrl: ModalController) { }

  ngOnInit() {}

  goBack() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
    this.router.navigateByUrl('tabs/tab1');
  }

  goToLogin() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
    this.router.navigate(['/login']);
  }

}
