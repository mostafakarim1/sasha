import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { BookingFolder } from 'src/app/models/booking-folder.model';

@Injectable()
export class TravelService {

  constructor(private http: HttpClient) { }

  getTravels(): Observable<BookingFolder> {
    return this.http.get<BookingFolder>(`${environment.settings.afidiumApi}/response.json`);
  }
}
