import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
private email = new BehaviorSubject<string>("");
private amount = new BehaviorSubject<Number>(0);
apiUrl ="https://localhost:7177/api/Donation/SendEmail";
getEmail = this.email.asObservable();
getAmount = this.amount.asObservable();
  constructor(private Http:HttpClient) { }

  putData(email:string,amount:Number){
   this.email.next(email);
   this.amount.next(amount);
  }
  sendInvoice(email:String,amount:Number):Observable<any>{
    let model = {To:email,Amount:amount};
   return this.Http.post(this.apiUrl,model);
  }
}
