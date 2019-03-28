import { Component, OnInit } from '@angular/core';
import { TravelService } from 'src/app/services/travel/travel.service';
import { BookingFolder } from 'src/app/models/booking-folder.model';
import { Booking } from 'src/app/models/booking.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  bookings: Booking[];
  filtredBookings: Booking[];
  bookingsNotFound: boolean;
  constructor(private travelService: TravelService) { }

  ngOnInit() {
    this.getBookings();
  }

  getBookings() {
    this.travelService.getTravels().subscribe(
      (bookingFolder: BookingFolder) => {
        this.bookings = bookingFolder.data.booking;
        this.filtredBookings = this.bookings;
      },
      error => {
        if (error.status === 404) {
          this.bookingsNotFound = true;
        }
      }
    );
  }

  filter(filter: string) {
    switch (filter) {
      case 'cancel':
        this.filtredBookings = this.bookings.filter(booking => booking.xStatus === 'cancel');
        break;
      case 'actionRequired':
        this.filtredBookings = this.bookings.filter(booking => booking.xStatus === 'actionRequired');
        break;
      case 'confirm':
        this.filtredBookings = this.bookings.filter(booking => booking.xStatus === 'confirm');
        break;
      case 'information':
        this.filtredBookings = this.bookings.filter(booking => booking.xStatus === 'information');
        break;
      default:
        this.filtredBookings = this.bookings;
        break;
    }
  }
}
