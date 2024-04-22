import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

constructor(private http:HttpClient){ }
private baseUrl = 'http://localhost:3000/users';


public getEmployess(){
  return this.http.get(`${this.baseUrl}`)
}

public createDetails(employeeDetails:any){
  return this.http.post(`${this.baseUrl}`, employeeDetails)
}

public updateDetails(employeeDetails:any){
return this.http.put(`${this.baseUrl}/${employeeDetails.id}`, employeeDetails)
}

public removeEmployee(employeeId: number){
  return this.http.delete(`${this.baseUrl}/${employeeId}`)
}
}
