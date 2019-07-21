import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-presensi',
  templateUrl: './presensi.page.html',
  styleUrls: ['./presensi.page.scss'],
})
export class PresensiPage implements OnInit {
  qrData = null;
  createdCode = null;
  scannedCode = null;
  display = null;

  createCode () {
    this.createdCode = this.qrData;
    this.display = 'true';
  }

  scanCode () {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
    })
  }

  constructor(private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {
    this.display = 'false';
  }

}
