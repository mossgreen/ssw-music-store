import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from '../models';
import {AuthService} from '../services/auth/auth.service';


@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent {

  @Input() album: Album;
  @Output('selected') selected = new EventEmitter();

  constructor(private _auth: AuthService){}

  onSelect(album) {
    this.selected.next(album);
  }
  loggedIn() {
    return this._auth.authenticated();
  }
}
