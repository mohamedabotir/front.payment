import { PaymentService } from './../payment.service';
import { Component, OnInit } from '@angular/core';
import {render } from 'creditcardpayments/creditCardPayments'
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-paypale',
  templateUrl: './paypale.component.html',
  styleUrls: ['./paypale.component.css']
})
export class PaypaleComponent implements OnInit {
amount!:Number;
  constructor(private donate:PaymentService,private route:ActivatedRoute) {


   }

  ngOnInit(): void {
    this.route.params.subscribe(data=>{
      this.amount = Number(data['id']);
      console.log(data);
    });
   console.log(this.amount);
   render({
    id: '#mypaypalButtons',
    value: this.amount.toString(),
    currency: 'LE',
    onApprove:(state=>{
      alert("payment Successfully");
    })
  });
  }
 onPrint(){
   console.log(this.amount);
 }
}
