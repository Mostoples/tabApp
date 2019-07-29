import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public form = [
    { val: 'Makan siang', isChecked: true },
    { val: 'Tidur', isChecked: false },
    { val: 'Mandi', isChecked: false },
   
  ];

  public forms = [
    { val: 'Makan Malam', isChecked: true },
    { val: 'Belajar', isChecked: false },
    { val: 'Rebahan', isChecked: false },
   
  ];
}
