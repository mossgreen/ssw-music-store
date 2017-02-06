import { MdButtonToggleModule } from '@angular2-material/button-toggle/button-toggle';
import { MdButtonModule } from '@angular2-material/button/button';
import { MdCheckboxModule } from '@angular2-material/checkbox/checkbox';
import { MdRadioModule } from '@angular2-material/radio/radio';
import { MdSlideToggleModule } from '@angular2-material/slide-toggle/slide-toggle';
import { MdSliderModule } from '@angular2-material/slider/slider';
import { MdSidenavModule } from '@angular2-material/sidenav/sidenav';
import { MdListModule } from '@angular2-material/list/list';
import { MdGridListModule } from '@angular2-material/grid-list/grid-list';
import { MdCardModule } from '@angular2-material/card/card';
import { MdIconModule } from '@angular2-material/icon/icon';
import { MdProgressCircleModule } from '@angular2-material/progress-circle/progress-circle';
import { MdProgressBarModule } from '@angular2-material/progress-bar/progress-bar';
import { MdInputModule } from '@angular2-material/input/input';
import { MdTabsModule } from '@angular2-material/tabs/tabs';
import { MdToolbarModule } from '@angular2-material/toolbar/toolbar';
import { MdTooltipModule } from '@angular2-material/tooltip/tooltip';
import { MdRippleModule } from '@angular2-material/core/ripple/ripple';
import { PortalModule } from '@angular2-material/core/portal/portal-directives';
import { OverlayModule } from '@angular2-material/core/overlay/overlay-directives';
import { MdMenuModule } from '@angular2-material/menu/menu';
import { RtlModule } from '@angular2-material/core/rtl/dir';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { AlbumService } from './services/album/album.service';
import { AlbumSummaryComponent } from './album-summary/album-summary.component';
import { SearchComponent } from './search/search.component';
import { AlbumComponent } from './album/album.component';

import { routing } from './app.routing';
import { AlbumDetailComponent } from './album-detail/album-detail.component';

import {GenreService} from './services/genre/genre.service';
import { GenresComponent } from './genres/genres.component';
import { GenreDetailComponent } from './genre-detail/genre-detail.component';
import {AuthService} from './services/auth/auth.service';

import {CartService} from './services/cart/cart.service';
import {AUTH_PROVIDERS} from 'angular2-jwt';

import {Http} from '@angular/http';
import {RequestOptions} from '@angular/http';
import {AuthHttp,AuthConfig} from 'angular2-jwt';
import { CartComponent } from './cart/cart.component'
export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'token',
          tokenGetter: (() => localStorage.getItem('token')),
          globalHeaders: [{'Content-Type':'application/json'}],
     }), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlbumSummaryComponent,
    SearchComponent,
    AlbumComponent,
    AlbumDetailComponent,
    GenresComponent,
    GenreDetailComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdButtonModule.forRoot(),
    MdButtonToggleModule.forRoot(),
    MdCardModule.forRoot(),
    MdCheckboxModule.forRoot(),
    MdGridListModule.forRoot(),
    MdIconModule.forRoot(),
    MdInputModule.forRoot(),
    MdListModule.forRoot(),
    MdMenuModule.forRoot(),
    MdProgressBarModule.forRoot(),
    MdProgressCircleModule.forRoot(),
    MdRadioModule.forRoot(),
    MdRippleModule.forRoot(),
    MdSidenavModule.forRoot(),
    MdSliderModule.forRoot(),
    MdSlideToggleModule.forRoot(),
    MdTabsModule.forRoot(),
    MdToolbarModule.forRoot(),
    MdTooltipModule.forRoot(),
    OverlayModule.forRoot(),
    PortalModule.forRoot(),
    RtlModule.forRoot(),
    routing,
  ],

  /**
   * We add providers to the app NgModule
   * so a single instance will be available to the entire app
   * if we add the provider to a child module, 
   * it would receive it's own instance. this is more useful for the data storage servcies
   */
  providers: [AlbumService,GenreService,AuthService,CartService,{
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
