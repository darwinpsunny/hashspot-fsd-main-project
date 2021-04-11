import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(private http:HttpClient) { }
       
  vehicleloansubmit(vehicleloan,id)
  {  
      return this.http.post("http://localhost:3000/applications/vehicleloansubmit",{id,vehicleloan}).subscribe();
  }
  statustoverify(id)
  { 
    return this.http.post("http://localhost:3000/applications/statustoverify",{id}).subscribe();
  }
  reject(id)
  {
    return this.http.post("http://localhost:3000/applications/reject",{id}).subscribe();
  }
  statustowait(id,approvedamount,emi)
  {
    return this.http.post("http://localhost:3000/applications/wait",{id,approvedamount,emi}).subscribe();
  }
  amountaccept(id)
  {
    return this.http.post("http://localhost:3000/applications/amountaccept",{id}).subscribe();
  }
 
}
