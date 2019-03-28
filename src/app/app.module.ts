import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './pages/search/search.component';
import { SearchModule } from './pages/search/search.module';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './components/booking/booking.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const routes: Routes = [{
  path: '',
  redirectTo: '/search',
  pathMatch: 'full'
}];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    SearchModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
