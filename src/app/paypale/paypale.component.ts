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
email!:String;
  constructor(private donate:PaymentService,private route:ActivatedRoute) {


   }

  ngOnInit(): void {
    this.route.params.subscribe(data=>{
      this.amount = Number(data['id']);
      this.email = String(data['id2']);
      console.log(data);
    });
   console.log(this.amount);
   render({
    id: '#mypaypalButtons',
    value: this.amount.toString(),
    currency: 'LE',
    onApprove:(state=>{
      this.donate.sendInvoice(this.email,this.amount).subscribe(data=>{
        console.log(data);
      });
      alert("payment Successfully");
    })
  });
  }
 onPrint(){
   console.log(this.amount);
 }
}
