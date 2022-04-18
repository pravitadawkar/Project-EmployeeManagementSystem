import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient,HttpParams} from "@angular/common/http";
import{Project} from '../models/project';
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private httpclient:HttpClient) { }
  getAllProjects():Observable<Project[]> {
    return this.httpclient.get<Project[]>("https://localhost:44390/api/Project/AllProjects");
}

postProject( model:Project):Observable<Project>{
    return this.httpclient.post<Project>("https://localhost:44390/api/Project/AddProject",model);
}
deleteProject(id:number):Observable<Project>{
    return this.httpclient.post<Project>("https://localhost:44390/api/Project/DeleteProject?id="+id,'')
}
getProjectById(Id:number):Observable<Project>{
    return this.httpclient.get<Project>("https://localhost:44390/api/Project/Project?id="+Id);
}
updateProject(model:Project):Observable<Project>{
    return this.httpclient.post<Project>("https://localhost:44390/api/Project/UpdateProject",model)
}
}
