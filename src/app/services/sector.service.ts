import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Sector} from '../models/sector.interface';

@Injectable({
  providedIn: 'root'
})
export class SectorService {
  public apiUrl = '/api/sector/all';

  constructor(private http: HttpClient) {
  }

  getSectors(): Observable<Sector[]>{
    return this.http.get<Sector[]>(this.apiUrl);
  }

}
