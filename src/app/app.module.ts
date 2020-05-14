import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomService } from './room.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RoomListComponent } from './room-list/room-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RoomDataComponent } from './room-data/room-data.component';
import { CarouselComponent } from './carousel/carousel.component';

const appRoutes: Routes = [
  { path: 'home', component: RoomListComponent },
  { path: 'cart', component: ProductListComponent },
  { path: 'room', component: RoomDataComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
@NgModule({
  declarations: [
    AppComponent,
    RoomListComponent,
    ProductListComponent,
    RoomDataComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
      // { enableTracing: true }
    )
  ],
  providers: [RoomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
