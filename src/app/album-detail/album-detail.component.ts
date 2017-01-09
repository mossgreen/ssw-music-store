import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from '../models';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent {

  @Input() album: Album;
  @Output('selected') selected = new EventEmitter();

  onSelect(album) {
    this.selected.next(album);
  }
  loggedIn() {
    return false;
  }
}
