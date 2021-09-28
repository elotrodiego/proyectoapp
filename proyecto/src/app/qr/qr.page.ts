import { Component, OnInit } from '@angular/core';
import {QRScanner,QRScannerStatus} from "@ionic-native/qr-scanner/ngx"

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {

  constructor(private qrScanner:QRScanner) { }

  ngOnInit() {
    
  }

}
