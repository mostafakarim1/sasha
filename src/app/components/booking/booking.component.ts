import { Component, OnInit, Input } from '@angular/core';
import { Booking } from 'src/app/models/booking.model';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  @Input() booking: Booking;
  constructor() { }

  ngOnInit() {
  }

}
