import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient,HttpParams} from "@angular/common/http";
import{Notice} from '../models/notice';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {

  constructor(private httpclient:HttpClient) { }
  getAllNotice():Observable<Notice[]> {
    return this.httpclient.get<Notice[]>("https://localhost:44390/api/Notice/GetAllNotice");
}

postNotice( model:Notice):Observable<Notice>{
    return this.httpclient.post<Notice>("https://localhost:44390/api/Notice/AddNotice",model);
}
deleteNotice(id:number):Observable<Notice>{
    return this.httpclient.post<Notice>("https://localhost:44390/api/Notice/DeleteNotice?id="+id,'')
}
getNoticeById(Id:number):Observable<Notice>{
    return this.httpclient.get<Notice>("https://localhost:44390/api/Notice/NoticeById?id="+Id);
}
updateNotice(model:Notice):Observable<Notice>{
    return this.httpclient.post<Notice>("https://localhost:44390/api/Notice/UpdateNotice",model)
}
}
