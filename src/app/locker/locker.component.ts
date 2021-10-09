import { Component, OnInit, ViewChild } from '@angular/core';
import { FixedScaleAxis } from 'chartist';
import { NgbDate, NgbCalendar, NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-locker',
  templateUrl: './locker.component.html',
  styleUrls: ['./locker.component.scss'],
})
export class LockerComponent implements OnInit {

  packages = [
    {
      "lock_no": 1,
      "sex": "F",
      "emp_no": "000001",
      "name": "KANCHANA SAIPANUS",
      "dept": "ICD",
      "entr_date": "22-MAR-2021",
      "resign": null,
      "category": "Regular",
      "return_key": null,
      "upd_date": "22-MAR-2021",
      "remark": null,
    },
    {
      "lock_no": 2,
      "sex": "F",
      "emp_no": "000001",
      "name": "KANCHANA SAIPANUS",
      "dept": "ICD",
      "entr_date": "22-MAR-2021",
      "resign": null,
      "category": "Regular",
      "return_key": null,
      "upd_date": "22-MAR-2021",
      "remark": null,
    },
    {
      "lock_no": 3,
      "sex": "F",
      "emp_no": "000001",
      "name": "KANCHANA SAIPANUS",
      "dept": "ICD",
      "entr_date": "22-MAR-2021",
      "resign": null,
      "category": "Regular",
      "return_key": null,
      "upd_date": "22-MAR-2021",
      "remark": null,
    },
    {
      "lock_no": 4,
      "sex": "F",
      "emp_no": "000001",
      "name": "KANCHANA SAIPANUS",
      "dept": "ICD",
      "entr_date": "22-MAR-2021",
      "resign": null,
      "category": "Regular",
      "return_key": null,
      "upd_date": "22-MAR-2021",
      "remark": null,
    },
    {
      "lock_no": 5,
      "sex": "F",
      "emp_no": "000001",
      "name": "KANCHANA SAIPANUS",
      "dept": "ICD",
      "entr_date": "22-MAR-2021",
      "resign": null,
      "category": "Regular",
      "return_key": null,
      "upd_date": "22-MAR-2021",
      "remark": null,
    },
    {
      "lock_no": 6,
      "sex": "F",
      "emp_no": "000001",
      "name": "KANCHANA SAIPANUS",
      "dept": "ICD",
      "entr_date": "22-MAR-2021",
      "resign": null,
      "category": "Regular",
      "return_key": null,
      "upd_date": "22-MAR-2021",
      "remark": null,
    },
    {
      "lock_no": 7,
      "sex": "F",
      "emp_no": "000001",
      "name": "KANCHANA SAIPANUS",
      "dept": "ICD",
      "entr_date": "22-MAR-2021",
      "resign": null,
      "category": "Regular",
      "return_key": null,
      "upd_date": "22-MAR-2021",
      "remark": null,
    },
    {
      "lock_no": 8,
      "sex": "F",
      "emp_no": "000001",
      "name": "KANCHANA SAIPANUS",
      "dept": "ICD",
      "entr_date": "22-MAR-2021",
      "resign": null,
      "category": "Regular",
      "return_key": null,
      "upd_date": "22-MAR-2021",
      "remark": null,
    },
    {
      "lock_no": 9,
      "sex": "F",
      "emp_no": "000001",
      "name": "KANCHANA SAIPANUS",
      "dept": "ICD",
      "entr_date": "22-MAR-2021",
      "resign": null,
      "category": "Regular",
      "return_key": null,
      "upd_date": "22-MAR-2021",
      "remark": null,
    },
    {
      "lock_no": 10,
      "sex": "F",
      "emp_no": "000001",
      "name": "KANCHANA SAIPANUS",
      "dept": "ICD",
      "entr_date": "22-MAR-2021",
      "resign": null,
      "category": "Regular",
      "return_key": null,
      "upd_date": "22-MAR-2021",
      "remark": null,
    },
    {
      "lock_no": 11,
      "sex": "F",
      "emp_no": "000001",
      "name": "KANCHANA SAIPANUS",
      "dept": "ICD",
      "entr_date": "22-MAR-2021",
      "resign": null,
      "category": "Regular",
      "return_key": null,
      "upd_date": "22-MAR-2021",
      "remark": null,
    },
    {
      "lock_no": 12,
      "sex": "F",
      "emp_no": "000001",
      "name": "KANCHANA SAIPANUS",
      "dept": "ICD",
      "entr_date": "22-MAR-2021",
      "resign": null,
      "category": "Regular",
      "return_key": null,
      "upd_date": "22-MAR-2021",
      "remark": null,
    },
    {
      "lock_no": 13,
      "sex": "F",
      "emp_no": "000001",
      "name": "KANCHANA SAIPANUS",
      "dept": "ICD",
      "entr_date": "22-MAR-2021",
      "resign": null,
      "category": "Regular",
      "return_key": null,
      "upd_date": "22-MAR-2021",
      "remark": null,
    },
    {
      "lock_no": 14,
      "sex": "F",
      "emp_no": "000001",
      "name": "KANCHANA SAIPANUS",
      "dept": "ICD",
      "entr_date": "22-MAR-2021",
      "resign": null,
      "category": "Regular",
      "return_key": null,
      "upd_date": "22-MAR-2021",
      "remark": null,
    },
  ]



 constructor() { 
     console.log(this.packages)

 }

 ngOnInit() {
 }
}