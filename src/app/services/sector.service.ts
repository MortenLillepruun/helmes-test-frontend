import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SectorsService {
  public apiUrl = '/sector/all';

  constructor(private http: HttpClient) {
  }

  getSectors():

}
