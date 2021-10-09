import { Component, OnInit, ViewChild } from '@angular/core';
import { FixedScaleAxis } from 'chartist';
import { NgbDate, NgbCalendar, NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';
import axios from 'axios';

@Component({
  selector: 'app-Welfare',
  templateUrl: './Welfare.component.html',
  styleUrls: ['./Welfare.component.scss'],
})


export class WelfareComponent implements OnInit {

    public menus_maintenance = [];
    public menus_inquiry = [];
    public menus_report = [];
  

  constructor() { 

    axios.get('/assets/PEF.json').then(response => (
      this.menus_maintenance = response.data
    ));

    axios.get('/assets/PEI.json').then(response => (
      this.menus_inquiry = response.data
    ));

    axios.get('/assets/PER_O.json').then(response => (
      this.menus_report = response.data
    ));




  }

  ngOnInit() {
  }


}