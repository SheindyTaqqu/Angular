import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiCalls {

  baseUrl :string = 'http://127.0.0.1:5000/api';

  constructor(private http: HttpClient){}

  get(url:string):Observable<any>{
    return this.http.get(`${this.baseUrl}${url}`)
  }

  // getBiId(url:string,id:number):Observable<any>{
  //   return this.http.get(`${this.baseUrl}${url}?id=${id}`);
  // }
  post(url:string,object:any):Observable<any>{
    return this.http.post(`${this.baseUrl}${url}`,object);
  }
  // put(url:string,object:any,id:number):Observable<any>{
  //   return this.http.put(`${this.baseUrl}${url}?id=${id}`,object);
  // }
  // delete(url:string,id:number){
  //   return this.http.delete(`${this.baseUrl}${url}?id=${id}`);
  // }
  getById(url: string, id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}${url}/${id}`);
  }
  
  put(url: string, object: any, id: number): Observable<any> {
    return this.http.put(`${this.baseUrl}${url}/${id}`, object);
  }
  
  delete(url: string, id: number) {
    return this.http.delete(`${this.baseUrl}${url}/${id}`);
  }

  
}
