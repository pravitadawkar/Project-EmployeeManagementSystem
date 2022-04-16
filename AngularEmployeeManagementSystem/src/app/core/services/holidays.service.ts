import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient,HttpParams} from "@angular/common/http";
import{Holidays} from '../models/holidays';

@Injectable({
  providedIn: 'root'
})
export class HolidaysService {

  constructor(private httpclient:HttpClient) { }
  getAllHolidays():Observable<Holidays[]> {
    return this.httpclient.get<Holidays[]>("https://localhost:44390/api/Holiday/GetAllHolidays");
}

postHolidays( model:Holidays):Observable<Holidays>{
    return this.httpclient.post<Holidays>("https://localhost:44390/api/Holiday/AddHolidays",model);
}
deleteHolidays(id:number):Observable<Holidays>{
    return this.httpclient.post<Holidays>("https://localhost:44390/api/Holiday/DeleteHolidays?id="+id,'')
}
getHolidaysById(Id:number):Observable<Holidays>{
    return this.httpclient.get<Holidays>("https://localhost:44390/api/Holiday/HolidayById?id="+Id);
}
updateHolidays(model:Holidays):Observable<Holidays>{
    return this.httpclient.post<Holidays>("https://localhost:44390/api/Holiday/UpdateHolidays",model)
}
}
