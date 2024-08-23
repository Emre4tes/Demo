import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YurtService {
  private apiUrl = 'https://api.yourdomain.com/yurtlar'; // API URL'nizi buraya ekleyin

  constructor(private http: HttpClient) { }

  getYurtDetail(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
