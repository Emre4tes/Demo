import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Yurt } from 'src/model/yurt.model';

@Injectable({
  providedIn: 'root'
})
export class YurtService {

  private apiUrl = '/api/yurtlar';

  constructor(private http: HttpClient) { }

  getYurtDetail(id: string): Observable<Yurt> {
    return this.http.get<Yurt>(`${this.apiUrl}/${id}`);
  }
  getYurtById(id: number): Observable<Yurt> {
    return this.http.get<Yurt>(`${this.apiUrl}/${id}`);
  }
}
