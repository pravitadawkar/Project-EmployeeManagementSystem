import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient,HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private httpclient:HttpClient) { }
  loginForm(data:any):Observable<any>{
    return this.httpclient.post<any>('https://localhost:44390/api/Authenticate/login',data);
}
 getToken(){
     return localStorage.getItem('token');
 }
}
