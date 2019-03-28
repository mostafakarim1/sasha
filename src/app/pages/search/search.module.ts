import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TravelService } from 'src/app/services/travel/travel.service';

const routes: Routes = [
  { path: 'search', component: SearchComponent }
];

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [
    TravelService
  ]
})

export class SearchModule { }
