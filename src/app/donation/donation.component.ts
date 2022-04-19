import { PaymentService } from './../payment.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {

  constructor(private payment:PaymentService,private route:Router) { }
   email!:string;
   amount!:Number;
  ngOnInit(): void {
  }

  onSubmit(email:string,amount:String){
   this.amount = Number(amount);
   this.email = email;
  this.route.navigate(['donation',this.amount,this.email]);
  }
}
