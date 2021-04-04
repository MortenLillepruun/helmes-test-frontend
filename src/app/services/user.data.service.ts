import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Sector} from '../models/sector.interface';
import {UserData} from '../models/user.data.interface';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  public apiUrl = '/api/user';

  constructor(private http: HttpClient) {
  }

  saveUserData(id: number,
               name: string,
               sectors: Sector[],
               termsAgreement: boolean): Observable<UserData> {
    const body = {
      id,
      name,
      sectors,
      termsAgreement
    };
    return this.http.post<UserData>(this.apiUrl, body);
  }
}
