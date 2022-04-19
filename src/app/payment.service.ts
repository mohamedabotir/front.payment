import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
private email = new BehaviorSubject<string>("");
private amount = new BehaviorSubject<Number>(0);
getEmail = this.email.asObservable();
getAmount = this.amount.asObservable();
  constructor() { }

  putData(email:string,amount:Number){
   this.email.next(email);
   this.amount.next(amount);
  }
}
