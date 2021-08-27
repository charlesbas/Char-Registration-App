import { Injectable } from '@angular/core';
import { REG } from 'src/REG';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers :new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root',
})
export class RegService {
  private apiUrl = 'http://localhost:5000/Regs';
  private apiUrlget = 'http://localhost:5000/Regs?_sort=hasPaid,paid&_order=desc,desc';

  constructor(private http: HttpClient) {}

  getList(): Observable<REG[]> {
    return this.http.get<REG[]>(this.apiUrl);
  }

  deleteReg(statToDelete: REG): Observable<REG> {
    const url = `${this.apiUrl}/${statToDelete.id}`;
    return this.http.delete<REG>(url);
  }

  updateList(statToUpdate: REG): Observable<REG> {
    const url = `${this.apiUrl}/${statToUpdate.id}`;
    return this.http.put<REG>(url, statToUpdate, httpOptions);
  }

  addToList(statToAdd: REG): Observable<REG> {
    return this.http.post<REG>(this.apiUrl, statToAdd, httpOptions);
  }
}